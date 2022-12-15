import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ReserveAuctionFindersErc20AuctionBid,
  ReserveAuctionFindersErc20AuctionCanceled,
  ReserveAuctionFindersErc20AuctionCreated,
  ReserveAuctionFindersErc20AuctionEnded,
  ReserveAuctionFindersErc20AuctionReservePriceUpdated,
  ReserveAuctionFindersErc20RoyaltyPayout
} from "../generated/ReserveAuctionFindersErc20/ReserveAuctionFindersErc20"

export function createReserveAuctionFindersErc20AuctionBidEvent(
  tokenContract: Address,
  tokenId: BigInt,
  firstBid: boolean,
  extended: boolean,
  auction: ethereum.Tuple
): ReserveAuctionFindersErc20AuctionBid {
  let reserveAuctionFindersErc20AuctionBidEvent = changetype<
    ReserveAuctionFindersErc20AuctionBid
  >(newMockEvent())

  reserveAuctionFindersErc20AuctionBidEvent.parameters = new Array()

  reserveAuctionFindersErc20AuctionBidEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionFindersErc20AuctionBidEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionFindersErc20AuctionBidEvent.parameters.push(
    new ethereum.EventParam("firstBid", ethereum.Value.fromBoolean(firstBid))
  )
  reserveAuctionFindersErc20AuctionBidEvent.parameters.push(
    new ethereum.EventParam("extended", ethereum.Value.fromBoolean(extended))
  )
  reserveAuctionFindersErc20AuctionBidEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionFindersErc20AuctionBidEvent
}

export function createReserveAuctionFindersErc20AuctionCanceledEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): ReserveAuctionFindersErc20AuctionCanceled {
  let reserveAuctionFindersErc20AuctionCanceledEvent = changetype<
    ReserveAuctionFindersErc20AuctionCanceled
  >(newMockEvent())

  reserveAuctionFindersErc20AuctionCanceledEvent.parameters = new Array()

  reserveAuctionFindersErc20AuctionCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionFindersErc20AuctionCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionFindersErc20AuctionCanceledEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionFindersErc20AuctionCanceledEvent
}

export function createReserveAuctionFindersErc20AuctionCreatedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): ReserveAuctionFindersErc20AuctionCreated {
  let reserveAuctionFindersErc20AuctionCreatedEvent = changetype<
    ReserveAuctionFindersErc20AuctionCreated
  >(newMockEvent())

  reserveAuctionFindersErc20AuctionCreatedEvent.parameters = new Array()

  reserveAuctionFindersErc20AuctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionFindersErc20AuctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionFindersErc20AuctionCreatedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionFindersErc20AuctionCreatedEvent
}

export function createReserveAuctionFindersErc20AuctionEndedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): ReserveAuctionFindersErc20AuctionEnded {
  let reserveAuctionFindersErc20AuctionEndedEvent = changetype<
    ReserveAuctionFindersErc20AuctionEnded
  >(newMockEvent())

  reserveAuctionFindersErc20AuctionEndedEvent.parameters = new Array()

  reserveAuctionFindersErc20AuctionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionFindersErc20AuctionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionFindersErc20AuctionEndedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionFindersErc20AuctionEndedEvent
}

export function createReserveAuctionFindersErc20AuctionReservePriceUpdatedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): ReserveAuctionFindersErc20AuctionReservePriceUpdated {
  let reserveAuctionFindersErc20AuctionReservePriceUpdatedEvent = changetype<
    ReserveAuctionFindersErc20AuctionReservePriceUpdated
  >(newMockEvent())

  reserveAuctionFindersErc20AuctionReservePriceUpdatedEvent.parameters = new Array()

  reserveAuctionFindersErc20AuctionReservePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionFindersErc20AuctionReservePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionFindersErc20AuctionReservePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return reserveAuctionFindersErc20AuctionReservePriceUpdatedEvent
}

export function createReserveAuctionFindersErc20RoyaltyPayoutEvent(
  tokenContract: Address,
  tokenId: BigInt,
  recipient: Address,
  amount: BigInt
): ReserveAuctionFindersErc20RoyaltyPayout {
  let reserveAuctionFindersErc20RoyaltyPayoutEvent = changetype<
    ReserveAuctionFindersErc20RoyaltyPayout
  >(newMockEvent())

  reserveAuctionFindersErc20RoyaltyPayoutEvent.parameters = new Array()

  reserveAuctionFindersErc20RoyaltyPayoutEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  reserveAuctionFindersErc20RoyaltyPayoutEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reserveAuctionFindersErc20RoyaltyPayoutEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  reserveAuctionFindersErc20RoyaltyPayoutEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return reserveAuctionFindersErc20RoyaltyPayoutEvent
}
