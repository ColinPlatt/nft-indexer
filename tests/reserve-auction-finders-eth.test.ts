import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ReserveAuctionFindersEthAuctionBid } from "../generated/schema"
import { ReserveAuctionFindersEthAuctionBid as ReserveAuctionFindersEthAuctionBidEvent } from "../generated/ReserveAuctionFindersEth/ReserveAuctionFindersEth"
import { handleReserveAuctionFindersEthAuctionBid } from "../src/reserve-auction-finders-eth"
import { createReserveAuctionFindersEthAuctionBidEvent } from "./reserve-auction-finders-eth-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let tokenContract = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenId = BigInt.fromI32(234)
    let firstBid = "boolean Not implemented"
    let extended = "boolean Not implemented"
    let auction = "ethereum.Tuple Not implemented"
    let newReserveAuctionFindersEthAuctionBidEvent = createReserveAuctionFindersEthAuctionBidEvent(
      tokenContract,
      tokenId,
      firstBid,
      extended,
      auction
    )
    handleReserveAuctionFindersEthAuctionBid(
      newReserveAuctionFindersEthAuctionBidEvent
    )
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ReserveAuctionFindersEthAuctionBid created and stored", () => {
    assert.entityCount("ReserveAuctionFindersEthAuctionBid", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ReserveAuctionFindersEthAuctionBid",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenContract",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ReserveAuctionFindersEthAuctionBid",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )
    assert.fieldEquals(
      "ReserveAuctionFindersEthAuctionBid",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "firstBid",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "ReserveAuctionFindersEthAuctionBid",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "extended",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "ReserveAuctionFindersEthAuctionBid",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "auction",
      "ethereum.Tuple Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
