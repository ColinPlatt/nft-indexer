import { Address, ethereum } from "@graphprotocol/graph-ts"
import {
  OfferCanceled as OfferCanceledEvent,
  OfferCreated as OfferCreatedEvent,
  OfferFilled as OfferFilledEvent,
  OfferUpdated as OfferUpdatedEvent
} from "../generated/OffersV1/OffersV1"
import {
  Offer,
  OfferEvent
} from "../generated/schema"


export function handleOfferCreated(event: OfferCreatedEvent): void {
  let entity = Offer.load(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.offer.maker.toHex())
  
  if (entity == null) {
    entity = new Offer(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.offer.maker.toHex())
  }

  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.offer_live = true
  entity.offer_id = event.params.id
  entity.taker = Address.zero()
  entity.finder = Address.zero()
  entity.offer_maker = event.params.offer.maker
  entity.offer_currency = event.params.offer.currency
  entity.offer_findersFeeBps = event.params.offer.findersFeeBps
  entity.offer_amount = event.params.offer.amount
  entity.save()

  let ev = new OfferEvent(
    event.block.number.toString().concat('-').concat(event.logIndex.toString())
  )
  ev.eventType = "OFFER_CREATED"
  ev.time = event.block.timestamp
  ev.offer = entity.id

  ev.save()

}

export function handleOfferCanceled(event: OfferCanceledEvent): void {
  let entity = Offer.load(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.offer.maker.toHex())
  
  if (entity == null) {
    entity = new Offer(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.offer.maker.toHex())
  }

  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.offer_live = false
  entity.offer_id = event.params.id
  entity.taker = Address.zero()
  entity.finder = Address.zero()
  entity.offer_maker = event.params.offer.maker
  entity.offer_currency = event.params.offer.currency
  entity.offer_findersFeeBps = event.params.offer.findersFeeBps
  entity.offer_amount = event.params.offer.amount
  entity.save()

  let ev = new OfferEvent(
    event.block.number.toString().concat('-').concat(event.logIndex.toString())
  )
  ev.eventType = "OFFER_CANCELED"
  ev.time = event.block.timestamp
  ev.offer = entity.id

  ev.save()
}

export function handleOfferUpdated(event: OfferUpdatedEvent): void {
  let entity = Offer.load(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.offer.maker.toHex())
  
  if (entity == null) {
    entity = new Offer(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.offer.maker.toHex())
  }

  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.offer_live = true
  entity.offer_id = event.params.id
  entity.taker = Address.zero()
  entity.finder = Address.zero()
  entity.offer_maker = event.params.offer.maker
  entity.offer_currency = event.params.offer.currency
  entity.offer_findersFeeBps = event.params.offer.findersFeeBps
  entity.offer_amount = event.params.offer.amount
  entity.save()

  let ev = new OfferEvent(
    event.block.number.toString().concat('-').concat(event.logIndex.toString())
  )
  ev.eventType = "OFFER_PRICE_UPDATED"
  ev.time = event.block.timestamp
  ev.offer = entity.id

  ev.save()
}

export function handleOfferFilled(event: OfferFilledEvent): void {
  let entity = Offer.load(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.offer.maker.toHex())
  
  if (entity == null) {
    entity = new Offer(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.offer.maker.toHex())
  }

  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.offer_live = false
  entity.offer_id = event.params.id
  entity.taker = event.params.taker
  entity.finder = event.params.finder
  entity.offer_maker = event.params.offer.maker
  entity.offer_currency = event.params.offer.currency
  entity.offer_findersFeeBps = event.params.offer.findersFeeBps
  entity.offer_amount = event.params.offer.amount
  entity.save()

  let ev = new OfferEvent(
    event.block.number.toString().concat('-').concat(event.logIndex.toString())
  )
  ev.eventType = "OFFER_FILLED"
  ev.time = event.block.timestamp
  ev.offer = entity.id

  ev.save()
}