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
	ERC721Metadata,
} from '../../generated/schema'

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