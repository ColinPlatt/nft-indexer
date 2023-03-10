import {
	Address,
	bigInt,
	BigInt,
	Bytes,
	dataSource,
	json,
	JSONValue,
	TypedMap
} from '@graphprotocol/graph-ts'

import {
	Account,
	ERC721Contract,
	ERC721Token,
	ERC721Operator,
	ERC721Attribute
} from '../../generated/schema'

import {
	IERC721,
} from '../../generated/erc721/IERC721'

import {
	fetchAccount
} from './account'

import {
	supportsInterface,
} from './erc165'

import  {
	ERC721Metadata
} from  '../../generated/templates'


export function fetchERC721(address: Address): ERC721Contract | null {
	let erc721   = IERC721.bind(address)

	// Try load entry
	let contract = ERC721Contract.load(address)
	if (contract != null) {
		fetchERC721Supply(address)
		return contract
	}

	// Detect using ERC165
	let detectionId      = address.concat(Bytes.fromHexString('80ac58cd')) // Address + ERC721
	let detectionAccount = Account.load(detectionId)

	// On missing cache
	if (detectionAccount == null) {
		detectionAccount = new Account(detectionId)
		let introspection_01ffc9a7 = supportsInterface(erc721, '01ffc9a7') // ERC165
		let introspection_80ac58cd = supportsInterface(erc721, '80ac58cd') // ERC721
		//let introspection_00000000 = supportsInterface(erc721, '00000000', false)
		let isERC721               = introspection_01ffc9a7 && introspection_80ac58cd // && introspection_00000000
		detectionAccount.asERC721  = isERC721 ? address : null
		detectionAccount.save()
	}

	// If an ERC721, build entry
	if (detectionAccount.asERC721) {
		contract                  = new ERC721Contract(address)
		let try_name              = erc721.try_name()
		let try_symbol            = erc721.try_symbol()
		contract.name             = try_name.reverted   ? '' : try_name.value
		contract.symbol           = try_symbol.reverted ? '' : try_symbol.value
		contract.supportsMetadata = supportsInterface(erc721, '5b5e139f') // ERC721Metadata
		let isERC721Enumerable 	  = supportsInterface(erc721, '780e9d63') // ERC721Enumerable
		contract.isEnumerable	  = isERC721Enumerable
		contract.totalSupply 	  = isERC721Enumerable? erc721.try_totalSupply().value : BigInt.fromI32(0)
		contract.asAccount        = address		
		contract.save()

		let account               = fetchAccount(address)
		account.asERC721          = address
		account.save()
	}

	return contract
}

function fetchERC721Supply(address: Address): ERC721Contract | null {
	let erc721   = IERC721.bind(address)

	// Try load entry
	let contract = ERC721Contract.load(address)
	if (contract != null) {
		if (contract.isEnumerable) {
			contract.totalSupply = erc721.try_totalSupply().value
			contract.save()
		}
		return contract
	}

	return contract
}

export function fetchERC721Token(contract: ERC721Contract, identifier: BigInt): ERC721Token {
	let id = contract.id.toHex().concat('/').concat(identifier.toHex())
	let token = ERC721Token.load(id)

	if (token == null) {
		token            	= new ERC721Token(id)
		token.contract   	= contract.id
		token.identifier 	= identifier
		token.approval   	= fetchAccount(Address.zero()).id
	}

	if (contract.supportsMetadata) {
		let erc721       = IERC721.bind(Address.fromBytes(contract.id))
		let try_tokenURI = erc721.try_tokenURI(identifier)
		token.uri        = try_tokenURI.reverted ? '' : try_tokenURI.value
		if(token.uri != null){
			ERC721Metadata.create(try_tokenURI.value)
		}
	}

	return token as ERC721Token
}

export function fetchERC721Operator(contract: ERC721Contract, owner: Account, operator: Account): ERC721Operator {
	let id = contract.id.toHex().concat('/').concat(owner.id.toHex()).concat('/').concat(operator.id.toHex())
	let op = ERC721Operator.load(id)

	if (op == null) {
		op          = new ERC721Operator(id)
		op.contract = contract.id
		op.owner    = owner.id
		op.operator = operator.id
	}

	return op as ERC721Operator
}
