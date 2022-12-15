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
	ERC721Metadata,
	ERC721Attribute
} from '../../generated/schema'

import {
	IERC721,
} from '../../generated/erc721/IERC721'

export function handleMetadata(content: Bytes): void { 

    let tokenMetadata = new ERC721Metadata(dataSource.stringParam());

    const value = json.fromBytes(content).toObject()
    if (value) {
      const image = value.get('image')
      const name = value.get('name')
      const description = value.get('description')
      const externalURL = value.get('external_url')
    

        if (name && image && description && externalURL) {
            tokenMetadata.name = name.toString()
            tokenMetadata.image = image.toString()
            tokenMetadata.external_uri = externalURL.toString()
            tokenMetadata.description = description.toString()
        }

        tokenMetadata.save()
    }
}