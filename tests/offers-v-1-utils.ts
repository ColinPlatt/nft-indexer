import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ExchangeExecuted,
  OfferCanceled,
  OfferCreated,
  OfferFilled,
  OfferUpdated,
  RoyaltyPayout
} from "../generated/OffersV1/OffersV1"

export function createExchangeExecutedEvent(
  userA: Address,
  userB: Address,
  a: ethereum.Tuple,
  b: ethereum.Tuple
): ExchangeExecuted {
  let exchangeExecutedEvent = changetype<ExchangeExecuted>(newMockEvent())

  exchangeExecutedEvent.parameters = new Array()

  exchangeExecutedEvent.parameters.push(
    new ethereum.EventParam("userA", ethereum.Value.fromAddress(userA))
  )
  exchangeExecutedEvent.parameters.push(
    new ethereum.EventParam("userB", ethereum.Value.fromAddress(userB))
  )
  exchangeExecutedEvent.parameters.push(
    new ethereum.EventParam("a", ethereum.Value.fromTuple(a))
  )
  exchangeExecutedEvent.parameters.push(
    new ethereum.EventParam("b", ethereum.Value.fromTuple(b))
  )

  return exchangeExecutedEvent
}

export function createOfferCanceledEvent(
  tokenContract: Address,
  tokenId: BigInt,
  id: BigInt,
  offer: ethereum.Tuple
): OfferCanceled {
  let offerCanceledEvent = changetype<OfferCanceled>(newMockEvent())

  offerCanceledEvent.parameters = new Array()

  offerCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  offerCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  offerCanceledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  offerCanceledEvent.parameters.push(
    new ethereum.EventParam("offer", ethereum.Value.fromTuple(offer))
  )

  return offerCanceledEvent
}

export function createOfferCreatedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  id: BigInt,
  offer: ethereum.Tuple
): OfferCreated {
  let offerCreatedEvent = changetype<OfferCreated>(newMockEvent())

  offerCreatedEvent.parameters = new Array()

  offerCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam("offer", ethereum.Value.fromTuple(offer))
  )

  return offerCreatedEvent
}

export function createOfferFilledEvent(
  tokenContract: Address,
  tokenId: BigInt,
  id: BigInt,
  taker: Address,
  finder: Address,
  offer: ethereum.Tuple
): OfferFilled {
  let offerFilledEvent = changetype<OfferFilled>(newMockEvent())

  offerFilledEvent.parameters = new Array()

  offerFilledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  offerFilledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  offerFilledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  offerFilledEvent.parameters.push(
    new ethereum.EventParam("taker", ethereum.Value.fromAddress(taker))
  )
  offerFilledEvent.parameters.push(
    new ethereum.EventParam("finder", ethereum.Value.fromAddress(finder))
  )
  offerFilledEvent.parameters.push(
    new ethereum.EventParam("offer", ethereum.Value.fromTuple(offer))
  )

  return offerFilledEvent
}

export function createOfferUpdatedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  id: BigInt,
  offer: ethereum.Tuple
): OfferUpdated {
  let offerUpdatedEvent = changetype<OfferUpdated>(newMockEvent())

  offerUpdatedEvent.parameters = new Array()

  offerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  offerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  offerUpdatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  offerUpdatedEvent.parameters.push(
    new ethereum.EventParam("offer", ethereum.Value.fromTuple(offer))
  )

  return offerUpdatedEvent
}

export function createRoyaltyPayoutEvent(
  tokenContract: Address,
  tokenId: BigInt,
  recipient: Address,
  amount: BigInt
): RoyaltyPayout {
  let royaltyPayoutEvent = changetype<RoyaltyPayout>(newMockEvent())

  royaltyPayoutEvent.parameters = new Array()

  royaltyPayoutEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  royaltyPayoutEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  royaltyPayoutEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  royaltyPayoutEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return royaltyPayoutEvent
}
