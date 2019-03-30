import {
  CONST,
  utils,
} from 'ontology-ts-sdk';
import { BigNumber } from 'bignumber.js';

const {
  TEST_ONT_URL,
  MAIN_ONT_URL,
} = CONST;

import { Network } from './constants';

export function parseError(err) {
  try {
    if (err instanceof Error) {
      return err.toString();
    }

    return err;
  } catch (error) {
    return err;
  }
}

export function getNetworkUrl(network: Network) {
  switch (network) {
    case Network.MainNet:
      return 'https://dappnode1.ont.io:10334';
    case Network.TestNet:
      return 'https://polaris1.ont.io:10334';
  }
}

export function reverseHex2FixedNumStr(input: string, decimals: number): number {
  if (!input) {
    return 0;
  }

  const reverseHex = utils.reverseHex(input);
  const number = new BigNumber(reverseHex, 16);
  return trimDecimalStr(number.dividedBy(Math.pow(10, decimals)).toFixed(decimals));
}

function trimDecimalStr(numberSrt) {
  const parts = numberSrt.split('.');

  if (parts.length === 1) {
    return numberSrt;
  }

  if (Number(parts[1]) === 0) {
    return parts[0];
  }

  const trimmedDecimalString = parts[1].replace(/\.?0+$/, '');
  return `${parts[0]}.${trimmedDecimalString}`;
}

export function int2FixedDecimalStr(value: number, decimals: number): string {
  const number = new BigNumber(value);

  if (number.isEqualTo('0')) {
    return '0';
  }

  return trimDecimalStr(number.dividedBy(Math.pow(10, decimals)).toFixed(decimals));
}
