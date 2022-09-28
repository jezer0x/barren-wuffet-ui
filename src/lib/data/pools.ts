import {
  FUNDING_RATE_PRECISION,
  BASIS_POINTS_DIVISOR,
  MARGIN_FEE_BASIS_POINTS,
  bigNumberify,
  getTokenInfo,
  getPositionKey,
  getPositionContractKey,
  getLeverage,
  getDeltaStr,
} from "../legacy";
import { ethers, BigNumber } from "ethers";

const { AddressZero } = ethers.constants;

const getTokenAddress = (token, nativeTokenAddress): string => {
  if (token.address === AddressZero) {
    return nativeTokenAddress;
  }
  return token.address;
};

export function getPools(chainId, positionQuery) {
  const pools = [];
  const poolsMap = {};
  return { pools, poolsMap };
}

export function getPoolQuery(tokens, nativeTokenAddress) {
  const collateralTokens: string[] = [];
  const indexTokens: string[] = [];
  const isLong: Boolean[] = [];

  return { collateralTokens, indexTokens, isLong };
}
