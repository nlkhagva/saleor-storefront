import { IMoney } from "@types";

export const isPriceEqual = (first: IMoney, second: IMoney) =>
  first.amount === second.amount && first.currency === second.currency;

export const isGoodPrice = (first: IMoney, second: IMoney) =>
  first.amount <= second.amount && first.currency === second.currency;
