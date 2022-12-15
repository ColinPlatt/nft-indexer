import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ReserveAuctionListingEthAuctionBid,
  ReserveAuctionListingEthAuctionCanceled,
  ReserveAuctionListingEthAuctionCreated,
  ReserveAuctionListingEthAuctionEnded,
  ReserveAuctionListingEthAuctionReservePriceUpdated,
  ReserveAuctionListingEthRoyaltyPayout
} from "../generated/ReserveAuctionListingEth/ReserveAuctionListingEth"

export function createReserveAuctionListingEthAuctionBidEvent(
  tokenContract: Address,
  tokenId: BigInt,
  firstBid: boolean,
  extended: boolean,
  auction: ethereum.Tuple
): ReserveAuctionListingEthAuctionBid {
  let reserveAuctionListingEthAuctionBidEvent = changetype<
    ReserveAuctionListingEthAuctionBid
  >(newMockEvent())

  reserveAuctionListingEthAuctionBidEvent.parameters = new Array()

  reserveAuctionListingEthAuctionBidEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionListingEthAuctionBidEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionListingEthAuctionBidEvent.parameters.push(
    new ethereum.EventParam("firstBid", ethereum.Value.fromBoolean(firstBid))
  )
  reserveAuctionListingEthAuctionBidEvent.parameters.push(
    new ethereum.EventParam("extended", ethereum.Value.fromBoolean(extended))
  )
  reserveAuctionListingEthAuctionBidEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionListingEthAuctionBidEvent
}

export function createReserveAuctionListingEthAuctionCanceledEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): ReserveAuctionListingEthAuctionCanceled {
  let reserveAuctionListingEthAuctionCanceledEvent = changetype<
    ReserveAuctionListingEthAuctionCanceled
  >(newMockEvent())

  reserveAuctionListingEthAuctionCanceledEvent.parameters = new Array()

  reserveAuctionListingEthAuctionCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionListingEthAuctionCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionListingEthAuctionCanceledEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionListingEthAuctionCanceledEvent
}

export function createReserveAuctionListingEthAuctionCreatedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): ReserveAuctionListingEthAuctionCreated {
  let reserveAuctionListingEthAuctionCreatedEvent = changetype<
    ReserveAuctionListingEthAuctionCreated
  >(newMockEvent())

  reserveAuctionListingEthAuctionCreatedEvent.parameters = new Array()

  reserveAuctionListingEthAuctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionListingEthAuctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionListingEthAuctionCreatedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionListingEthAuctionCreatedEvent
}

export function createReserveAuctionListingEthAuctionEndedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): ReserveAuctionListingEthAuctionEnded {
  let reserveAuctionListingEthAuctionEndedEvent = changetype<
    ReserveAuctionListingEthAuctionEnded
  >(newMockEvent())

  reserveAuctionListingEthAuctionEndedEvent.parameters = new Array()

  reserveAuctionListingEthAuctionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionListingEthAuctionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionListingEthAuctionEndedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionListingEthAuctionEndedEvent
}

export function createReserveAuctionListingEthAuctionReservePriceUpdatedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): ReserveAuctionListingEthAuctionReservePriceUpdated {
  let reserveAuctionListingEthAuctionReservePriceUpdatedEvent = changetype<
    ReserveAuctionListingEthAuctionReservePriceUpdated
  >(newMockEvent())

  reserveAuctionListingEthAuctionReservePriceUpdatedEvent.parameters = new Array()

  reserveAuctionListingEthAuctionReservePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionListingEthAuctionReservePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionListingEthAuctionReservePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionListingEthAuctionReservePriceUpdatedEvent
}

export function createReserveAuctionListingEthRoyaltyPayoutEvent(
  tokenContract: Address,
  tokenId: BigInt,
  recipient: Address,
  amount: BigInt
): ReserveAuctionListingEthRoyaltyPayout {
  let reserveAuctionListingEthRoyaltyPayoutEvent = changetype<
    ReserveAuctionListingEthRoyaltyPayout
  >(newMockEvent())

  reserveAuctionListingEthRoyaltyPayoutEvent.parameters = new Array()

  reserveAuctionListingEthRoyaltyPayoutEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionListingEthRoyaltyPayoutEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionListingEthRoyaltyPayoutEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  reserveAuctionListingEthRoyaltyPayoutEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return reserveAuctionListingEthRoyaltyPayoutEvent
}
