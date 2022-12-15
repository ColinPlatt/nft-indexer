import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts"
import {
  AskCanceled as AskCanceledEvent,
  AskCreated as AskCreatedEvent,
  AskFilled as AskFilledEvent,
  AskPriceUpdated as AskPriceUpdatedEvent
} from "../generated/AsksV1/AsksV1"
import {
  Ask,
  AskEvent,
} from "../generated/schema"


export function handleAskCreated(event: AskCreatedEvent): void {
  let entity = Ask.load(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.ask.seller.toHex())

  if (entity == null) {
    entity = new Ask(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.ask.seller.toHex())
  }

  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.ask_live = true
  entity.buyer = Address.zero()
  entity.finder = Address.zero()
  entity.ask_seller = event.params.ask.seller
  entity.ask_sellerFundsRecipient = event.params.ask.sellerFundsRecipient
  entity.ask_askCurrency = event.params.ask.askCurrency
  entity.ask_findersFeeBps = event.params.ask.findersFeeBps
  entity.ask_askPrice = event.params.ask.askPrice
  entity.save()

  let ev = new AskEvent(
    event.block.number.toString().concat('-').concat(event.logIndex.toString())
  )
  ev.eventType = "ASK_CREATED"
  ev.time = event.block.timestamp
  ev.ask = entity.id

  ev.save()
}

export function handleAskCanceled(event: AskCanceledEvent): void {
  let entity = Ask.load(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.ask.seller.toHex())
  
  if (entity == null) {
    entity = new Ask(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.ask.seller.toHex())
  }


  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.ask_live = false
  entity.buyer = Address.zero()
  entity.finder = Address.zero()
  entity.ask_seller = event.params.ask.seller
  entity.ask_sellerFundsRecipient = event.params.ask.sellerFundsRecipient
  entity.ask_askCurrency = event.params.ask.askCurrency
  entity.ask_findersFeeBps = event.params.ask.findersFeeBps
  entity.ask_askPrice = event.params.ask.askPrice
  entity.save()

  let ev = new AskEvent(
    event.block.number.toString().concat('-').concat(event.logIndex.toString())
  )
  ev.eventType = "ASK_CANCELED"
  ev.time = event.block.timestamp
  ev.ask = entity.id

  entity.save()
  ev.save()
}

export function handleAskPriceUpdated(event: AskPriceUpdatedEvent): void {
  let entity = Ask.load(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.ask.seller.toHex())
  
  if (entity == null) {
    entity = new Ask(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.ask.seller.toHex())
  } 

  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.ask_live = true
  entity.buyer = Address.zero()
  entity.finder = Address.zero()
  entity.ask_seller = event.params.ask.seller
  entity.ask_sellerFundsRecipient = event.params.ask.sellerFundsRecipient
  entity.ask_askCurrency = event.params.ask.askCurrency
  entity.ask_findersFeeBps = event.params.ask.findersFeeBps
  entity.ask_askPrice = event.params.ask.askPrice

  entity.save()

  let ev = new AskEvent(
    event.block.number.toString().concat('-').concat(event.logIndex.toString())
  )
  ev.eventType = "ASK_PRICE_UPDATED"
  ev.time = event.block.timestamp
  ev.ask = entity.id

  entity.save()
  ev.save()
}

export function handleAskFilled(event: AskFilledEvent): void {
  let entity = Ask.load(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.ask.seller.toHex())
  
   if (entity == null) {
    entity = new Ask(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.ask.seller.toHex())
   } 
    

  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.ask_live = false
  entity.buyer = event.params.buyer
  entity.finder = event.params.finder
  entity.ask_seller = event.params.ask.seller
  entity.ask_sellerFundsRecipient = event.params.ask.sellerFundsRecipient
  entity.ask_askCurrency = event.params.ask.askCurrency
  entity.ask_findersFeeBps = event.params.ask.findersFeeBps
  entity.ask_askPrice = event.params.ask.askPrice
  entity.save()

  let ev = new AskEvent(
    event.block.number.toString().concat('-').concat(event.logIndex.toString())
  )
  ev.eventType = "ASK_FILLED"
  ev.time = event.block.timestamp
  ev.ask = entity.id

  entity.save()
  ev.save()
}
