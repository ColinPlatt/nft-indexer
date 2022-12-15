import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ReserveAuctionFindersEthAuctionBid,
  ReserveAuctionFindersEthAuctionCanceled,
  ReserveAuctionFindersEthAuctionCreated,
  ReserveAuctionFindersEthAuctionEnded,
  ReserveAuctionFindersEthAuctionReservePriceUpdated,
  ReserveAuctionFindersEthRoyaltyPayout
} from "../generated/ReserveAuctionFindersEth/ReserveAuctionFindersEth"

export function createReserveAuctionFindersEthAuctionBidEvent(
  tokenContract: Address,
  tokenId: BigInt,
  firstBid: boolean,
  extended: boolean,
  auction: ethereum.Tuple
): ReserveAuctionFindersEthAuctionBid {
  let reserveAuctionFindersEthAuctionBidEvent = changetype<
    ReserveAuctionFindersEthAuctionBid
  >(newMockEvent())

  reserveAuctionFindersEthAuctionBidEvent.parameters = new Array()

  reserveAuctionFindersEthAuctionBidEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionFindersEthAuctionBidEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionFindersEthAuctionBidEvent.parameters.push(
    new ethereum.EventParam("firstBid", ethereum.Value.fromBoolean(firstBid))
  )
  reserveAuctionFindersEthAuctionBidEvent.parameters.push(
    new ethereum.EventParam("extended", ethereum.Value.fromBoolean(extended))
  )
  reserveAuctionFindersEthAuctionBidEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionFindersEthAuctionBidEvent
}

export function createReserveAuctionFindersEthAuctionCanceledEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): ReserveAuctionFindersEthAuctionCanceled {
  let reserveAuctionFindersEthAuctionCanceledEvent = changetype<
    ReserveAuctionFindersEthAuctionCanceled
  >(newMockEvent())

  reserveAuctionFindersEthAuctionCanceledEvent.parameters = new Array()

  reserveAuctionFindersEthAuctionCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionFindersEthAuctionCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionFindersEthAuctionCanceledEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionFindersEthAuctionCanceledEvent
}

export function createReserveAuctionFindersEthAuctionCreatedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): ReserveAuctionFindersEthAuctionCreated {
  let reserveAuctionFindersEthAuctionCreatedEvent = changetype<
    ReserveAuctionFindersEthAuctionCreated
  >(newMockEvent())

  reserveAuctionFindersEthAuctionCreatedEvent.parameters = new Array()

  reserveAuctionFindersEthAuctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionFindersEthAuctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionFindersEthAuctionCreatedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionFindersEthAuctionCreatedEvent
}

export function createReserveAuctionFindersEthAuctionEndedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): ReserveAuctionFindersEthAuctionEnded {
  let reserveAuctionFindersEthAuctionEndedEvent = changetype<
    ReserveAuctionFindersEthAuctionEnded
  >(newMockEvent())

  reserveAuctionFindersEthAuctionEndedEvent.parameters = new Array()

  reserveAuctionFindersEthAuctionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionFindersEthAuctionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionFindersEthAuctionEndedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionFindersEthAuctionEndedEvent
}

export function createReserveAuctionFindersEthAuctionReservePriceUpdatedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): ReserveAuctionFindersEthAuctionReservePriceUpdated {
  let reserveAuctionFindersEthAuctionReservePriceUpdatedEvent = changetype<
    ReserveAuctionFindersEthAuctionReservePriceUpdated
  >(newMockEvent())

  reserveAuctionFindersEthAuctionReservePriceUpdatedEvent.parameters = new Array()

  reserveAuctionFindersEthAuctionReservePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionFindersEthAuctionReservePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionFindersEthAuctionReservePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionFindersEthAuctionReservePriceUpdatedEvent
}

export function createReserveAuctionFindersEthRoyaltyPayoutEvent(
  tokenContract: Address,
  tokenId: BigInt,
  recipient: Address,
  amount: BigInt
): ReserveAuctionFindersEthRoyaltyPayout {
  let reserveAuctionFindersEthRoyaltyPayoutEvent = changetype<
    ReserveAuctionFindersEthRoyaltyPayout
  >(newMockEvent())

  reserveAuctionFindersEthRoyaltyPayoutEvent.parameters = new Array()

  reserveAuctionFindersEthRoyaltyPayoutEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionFindersEthRoyaltyPayoutEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionFindersEthRoyaltyPayoutEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  reserveAuctionFindersEthRoyaltyPayoutEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return reserveAuctionFindersEthRoyaltyPayoutEvent
}
