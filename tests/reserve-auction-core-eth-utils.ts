import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ReserveAuctionCoreEthAuctionBid,
  ReserveAuctionCoreEthAuctionCanceled,
  ReserveAuctionCoreEthAuctionCreated,
  ReserveAuctionCoreEthAuctionEnded,
  ReserveAuctionCoreEthAuctionReservePriceUpdated,
  ReserveAuctionCoreEthRoyaltyPayout
} from "../generated/ReserveAuctionCoreEth/ReserveAuctionCoreEth"

export function createReserveAuctionCoreEthAuctionBidEvent(
  tokenContract: Address,
  tokenId: BigInt,
  firstBid: boolean,
  extended: boolean,
  auction: ethereum.Tuple
): ReserveAuctionCoreEthAuctionBid {
  let reserveAuctionCoreEthAuctionBidEvent = changetype<
    ReserveAuctionCoreEthAuctionBid
  >(newMockEvent())

  reserveAuctionCoreEthAuctionBidEvent.parameters = new Array()

  reserveAuctionCoreEthAuctionBidEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionCoreEthAuctionBidEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionCoreEthAuctionBidEvent.parameters.push(
    new ethereum.EventParam("firstBid", ethereum.Value.fromBoolean(firstBid))
  )
  reserveAuctionCoreEthAuctionBidEvent.parameters.push(
    new ethereum.EventParam("extended", ethereum.Value.fromBoolean(extended))
  )
  reserveAuctionCoreEthAuctionBidEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionCoreEthAuctionBidEvent
}

export function createReserveAuctionCoreEthAuctionCanceledEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): ReserveAuctionCoreEthAuctionCanceled {
  let reserveAuctionCoreEthAuctionCanceledEvent = changetype<
    ReserveAuctionCoreEthAuctionCanceled
  >(newMockEvent())

  reserveAuctionCoreEthAuctionCanceledEvent.parameters = new Array()

  reserveAuctionCoreEthAuctionCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionCoreEthAuctionCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionCoreEthAuctionCanceledEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionCoreEthAuctionCanceledEvent
}

export function createReserveAuctionCoreEthAuctionCreatedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): ReserveAuctionCoreEthAuctionCreated {
  let reserveAuctionCoreEthAuctionCreatedEvent = changetype<
    ReserveAuctionCoreEthAuctionCreated
  >(newMockEvent())

  reserveAuctionCoreEthAuctionCreatedEvent.parameters = new Array()

  reserveAuctionCoreEthAuctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionCoreEthAuctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionCoreEthAuctionCreatedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionCoreEthAuctionCreatedEvent
}

export function createReserveAuctionCoreEthAuctionEndedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): ReserveAuctionCoreEthAuctionEnded {
  let reserveAuctionCoreEthAuctionEndedEvent = changetype<
    ReserveAuctionCoreEthAuctionEnded
  >(newMockEvent())

  reserveAuctionCoreEthAuctionEndedEvent.parameters = new Array()

  reserveAuctionCoreEthAuctionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionCoreEthAuctionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionCoreEthAuctionEndedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionCoreEthAuctionEndedEvent
}

export function createReserveAuctionCoreEthAuctionReservePriceUpdatedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): ReserveAuctionCoreEthAuctionReservePriceUpdated {
  let reserveAuctionCoreEthAuctionReservePriceUpdatedEvent = changetype<
    ReserveAuctionCoreEthAuctionReservePriceUpdated
  >(newMockEvent())

  reserveAuctionCoreEthAuctionReservePriceUpdatedEvent.parameters = new Array()

  reserveAuctionCoreEthAuctionReservePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionCoreEthAuctionReservePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionCoreEthAuctionReservePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionCoreEthAuctionReservePriceUpdatedEvent
}

export function createReserveAuctionCoreEthRoyaltyPayoutEvent(
  tokenContract: Address,
  tokenId: BigInt,
  recipient: Address,
  amount: BigInt
): ReserveAuctionCoreEthRoyaltyPayout {
  let reserveAuctionCoreEthRoyaltyPayoutEvent = changetype<
    ReserveAuctionCoreEthRoyaltyPayout
  >(newMockEvent())

  reserveAuctionCoreEthRoyaltyPayoutEvent.parameters = new Array()

  reserveAuctionCoreEthRoyaltyPayoutEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionCoreEthRoyaltyPayoutEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionCoreEthRoyaltyPayoutEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  reserveAuctionCoreEthRoyaltyPayoutEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return reserveAuctionCoreEthRoyaltyPayoutEvent
}
