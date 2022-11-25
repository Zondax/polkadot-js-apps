// Copyright 2017-2022 @polkadot/app-referenda authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PalletReferendaTrackInfo } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';

import { formatNumber, stringPascalCase } from '@polkadot/util';

export function getTrackName (trackId: BN, { name }: PalletReferendaTrackInfo): string {
  return `${
    formatNumber(trackId)
  } / ${
    name
      .replace(/_/g, ' ')
      .split(' ')
      .map(stringPascalCase)
      .join(' ')
  }`;
}
