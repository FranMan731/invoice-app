interface FilterOption {
  label: string;
  value: string;
}

export const STATUS_OPTIONS: FilterOption[] = [
  { label: 'Created', value: 'CREATED' },
  { label: 'Pending', value: 'PENDING' },
  { label: 'Completed', value: 'COMPLETED' },
  { label: 'Expired', value: 'EXPIRED' }
];

export const CRYPTO_OPTIONS: FilterOption[] = [
  { label: 'USDT-TRX', value: 'USDT-TRX' },
  { label: 'USDT-ETH', value: 'USDT-ETH' },
  { label: 'ETH', value: 'ETH' },
  { label: 'TRX', value: 'TRX' }
];

export const POLLING_INTERVAL = 5000;