import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ReserveAuctionListingErc20AuctionBid,
  ReserveAuctionListingErc20AuctionCanceled,
  ReserveAuctionListingErc20AuctionCreated,
  ReserveAuctionListingErc20AuctionEnded,
  ReserveAuctionListingErc20AuctionReservePriceUpdated,
  ReserveAuctionListingErc20RoyaltyPayout
} from "../generated/ReserveAuctionListingErc20/ReserveAuctionListingErc20"

export function createReserveAuctionListingErc20AuctionBidEvent(
  tokenContract: Address,
  tokenId: BigInt,
  firstBid: boolean,
  extended: boolean,
  auction: ethereum.Tuple
): ReserveAuctionListingErc20AuctionBid {
  let reserveAuctionListingErc20AuctionBidEvent = changetype<
    ReserveAuctionListingErc20AuctionBid
  >(newMockEvent())

  reserveAuctionListingErc20AuctionBidEvent.parameters = new Array()

  reserveAuctionListingErc20AuctionBidEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionListingErc20AuctionBidEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionListingErc20AuctionBidEvent.parameters.push(
    new ethereum.EventParam("firstBid", ethereum.Value.fromBoolean(firstBid))
  )
  reserveAuctionListingErc20AuctionBidEvent.parameters.push(
    new ethereum.EventParam("extended", ethereum.Value.fromBoolean(extended))
  )
  reserveAuctionListingErc20AuctionBidEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionListingErc20AuctionBidEvent
}

export function createReserveAuctionListingErc20AuctionCanceledEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): ReserveAuctionListingErc20AuctionCanceled {
  let reserveAuctionListingErc20AuctionCanceledEvent = changetype<
    ReserveAuctionListingErc20AuctionCanceled
  >(newMockEvent())

  reserveAuctionListingErc20AuctionCanceledEvent.parameters = new Array()

  reserveAuctionListingErc20AuctionCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionListingErc20AuctionCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionListingErc20AuctionCanceledEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionListingErc20AuctionCanceledEvent
}

export function createReserveAuctionListingErc20AuctionCreatedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): ReserveAuctionListingErc20AuctionCreated {
  let reserveAuctionListingErc20AuctionCreatedEvent = changetype<
    ReserveAuctionListingErc20AuctionCreated
  >(newMockEvent())

  reserveAuctionListingErc20AuctionCreatedEvent.parameters = new Array()

  reserveAuctionListingErc20AuctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionListingErc20AuctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionListingErc20AuctionCreatedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionListingErc20AuctionCreatedEvent
}

export function createReserveAuctionListingErc20AuctionEndedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): ReserveAuctionListingErc20AuctionEnded {
  let reserveAuctionListingErc20AuctionEndedEvent = changetype<
    ReserveAuctionListingErc20AuctionEnded
  >(newMockEvent())

  reserveAuctionListingErc20AuctionEndedEvent.parameters = new Array()

  reserveAuctionListingErc20AuctionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionListingErc20AuctionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionListingErc20AuctionEndedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionListingErc20AuctionEndedEvent
}

export function createReserveAuctionListingErc20AuctionReservePriceUpdatedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): ReserveAuctionListingErc20AuctionReservePriceUpdated {
  let reserveAuctionListingErc20AuctionReservePriceUpdatedEvent = changetype<
    ReserveAuctionListingErc20AuctionReservePriceUpdated
  >(newMockEvent())

  reserveAuctionListingErc20AuctionReservePriceUpdatedEvent.parameters = new Array()

  reserveAuctionListingErc20AuctionReservePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionListingErc20AuctionReservePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionListingErc20AuctionReservePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionListingErc20AuctionReservePriceUpdatedEvent
}

export function createReserveAuctionListingErc20RoyaltyPayoutEvent(
  tokenContract: Address,
  tokenId: BigInt,
  recipient: Address,
  amount: BigInt
): ReserveAuctionListingErc20RoyaltyPayout {
  let reserveAuctionListingErc20RoyaltyPayoutEvent = changetype<
    ReserveAuctionListingErc20RoyaltyPayout
  >(newMockEvent())

  reserveAuctionListingErc20RoyaltyPayoutEvent.parameters = new Array()

  reserveAuctionListingErc20RoyaltyPayoutEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionListingErc20RoyaltyPayoutEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionListingErc20RoyaltyPayoutEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  reserveAuctionListingErc20RoyaltyPayoutEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return reserveAuctionListingErc20RoyaltyPayoutEvent
}
