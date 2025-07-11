import { Invoice } from "@/src/types/invoice.types";


const CUSTOMER_NAMES = [
  "Alex Johnson",
  "Maria Garcia",
  "James Smith",
  "Sarah Williams",
  "David Brown",
  "Emma Jones",
  "Michael Miller",
  "Sophia Davis",
  "Robert Wilson",
  "Olivia Martinez",
  "William Anderson",
  "Isabella Taylor",
  "Joseph Thomas",
  "Mia Hernandez",
  "Charles Moore"
];

const getRandomCustomer = () => {
  return CUSTOMER_NAMES[Math.floor(Math.random() * CUSTOMER_NAMES.length)];
};

export const mockInvoices: Invoice[] = [
  {
    "id": 1,
    "amount": {
      "crypto": "1.19",
      "fiat": "1.19 USD"
    },
    "createdAt": "2025-06-17T12:40:40Z",
    "expiredAt": "2025-06-18T12:40:40Z",
    "customer": "Chris Doe",
    "status": "PENDING",
    "crypto": "ETH"
  },
  {
    "id": 2,
    "amount": {
      "crypto": "0.37",
      "fiat": "0.37 USD"
    },
    "createdAt": "2025-05-29T14:40:40Z",
    "expiredAt": "2025-05-30T14:40:40Z",
    "customer": "Dat Tran",
    "status": "EXPIRED",
    "crypto": "ETH"
  },
  {
    "id": 3,
    "amount": {
      "crypto": "0.27",
      "fiat": "0.27 USD"
    },
    "createdAt": "2025-05-28T06:40:40Z",
    "expiredAt": "2025-05-29T06:40:40Z",
    "customer": "",
    "status": "EXPIRED",
    "crypto": "USDT-TRX"
  },
  {
    "id": 4,
    "amount": {
      "crypto": "0.79",
      "fiat": "0.79 USD"
    },
    "createdAt": "2025-05-28T22:40:40Z",
    "expiredAt": "2025-05-29T22:40:40Z",
    "customer": "",
    "status": "COMPLETED",
    "crypto": "ETH"
  },
  {
    "id": 5,
    "amount": {
      "crypto": "0.64",
      "fiat": "0.64 USD"
    },
    "createdAt": "2025-06-12T21:40:40Z",
    "expiredAt": "2025-06-13T21:40:40Z",
    "customer": "Juan Lastra",
    "status": "COMPLETED",
    "crypto": "USDT-ETH"
  },
  {
    "id": 6,
    "amount": {
      "crypto": "1.47",
      "fiat": "1.47 USD"
    },
    "createdAt": "2025-05-12T10:40:40Z",
    "expiredAt": "2025-05-13T10:40:40Z",
    "customer": "Dat Tran",
    "status": "PENDING",
    "crypto": "USDT-TRX"
  },
  {
    "id": 7,
    "amount": {
      "crypto": "0.79",
      "fiat": "0.79 USD"
    },
    "createdAt": "2025-06-03T14:40:40Z",
    "expiredAt": "2025-06-04T14:40:40Z",
    "customer": "Ana Gomez",
    "status": "CREATED",
    "crypto": "ETH"
  },
  {
    "id": 8,
    "amount": {
      "crypto": "1.43",
      "fiat": "1.43 USD"
    },
    "createdAt": "2025-06-30T02:40:40Z",
    "expiredAt": "2025-07-01T02:40:40Z",
    "customer": "Lee Wong",
    "status": "PENDING",
    "crypto": "ETH"
  },
  {
    "id": 9,
    "amount": {
      "crypto": "0.22",
      "fiat": "0.22 USD"
    },
    "createdAt": "2025-06-12T06:40:40Z",
    "expiredAt": "2025-06-13T06:40:40Z",
    "customer": "",
    "status": "EXPIRED",
    "crypto": "USDT-ETH"
  },
  {
    "id": 10,
    "amount": {
      "crypto": "0.54",
      "fiat": "0.54 USD"
    },
    "createdAt": "2025-06-27T02:40:40Z",
    "expiredAt": "2025-06-28T02:40:40Z",
    "customer": "Juan Lastra",
    "status": "EXPIRED",
    "crypto": "USDT-ETH"
  },
  {
    "id": 11,
    "amount": {
      "crypto": "0.87",
      "fiat": "0.87 USD"
    },
    "createdAt": "2025-05-29T14:40:40Z",
    "expiredAt": "2025-05-30T14:40:40Z",
    "customer": "Lee Wong",
    "status": "PENDING",
    "crypto": "TRX"
  },
  {
    "id": 12,
    "amount": {
      "crypto": "1.13",
      "fiat": "1.13 USD"
    },
    "createdAt": "2025-06-10T01:40:40Z",
    "expiredAt": "2025-06-11T01:40:40Z",
    "customer": "Dat Tran",
    "status": "COMPLETED",
    "crypto": "USDT-ETH"
  },
  {
    "id": 13,
    "amount": {
      "crypto": "0.33",
      "fiat": "0.33 USD"
    },
    "createdAt": "2025-06-12T05:40:40Z",
    "expiredAt": "2025-06-13T05:40:40Z",
    "customer": "Lee Wong",
    "status": "EXPIRED",
    "crypto": "USDT-ETH"
  },
  {
    "id": 14,
    "amount": {
      "crypto": "1.09",
      "fiat": "1.09 USD"
    },
    "createdAt": "2025-05-24T03:40:40Z",
    "expiredAt": "2025-05-25T03:40:40Z",
    "customer": "Dat Tran",
    "status": "CREATED",
    "crypto": "USDT-TRX"
  },
  {
    "id": 15,
    "amount": {
      "crypto": "0.28",
      "fiat": "0.28 USD"
    },
    "createdAt": "2025-06-24T01:40:40Z",
    "expiredAt": "2025-06-25T01:40:40Z",
    "customer": "Dat Tran",
    "status": "PENDING",
    "crypto": "TRX"
  },
  {
    "id": 16,
    "amount": {
      "crypto": "1.25",
      "fiat": "1.25 USD"
    },
    "createdAt": "2025-06-18T05:40:40Z",
    "expiredAt": "2025-06-19T05:40:40Z",
    "customer": "Ana Gomez",
    "status": "CREATED",
    "crypto": "USDT-ETH"
  },
  {
    "id": 17,
    "amount": {
      "crypto": "0.75",
      "fiat": "0.75 USD"
    },
    "createdAt": "2025-06-25T07:40:40Z",
    "expiredAt": "2025-06-26T07:40:40Z",
    "customer": "Chris Doe",
    "status": "CREATED",
    "crypto": "TRX"
  },
  {
    "id": 18,
    "amount": {
      "crypto": "1.37",
      "fiat": "1.37 USD"
    },
    "createdAt": "2025-06-02T03:40:40Z",
    "expiredAt": "2025-06-03T03:40:40Z",
    "customer": "",
    "status": "PENDING",
    "crypto": "USDT-ETH"
  },
  {
    "id": 19,
    "amount": {
      "crypto": "0.48",
      "fiat": "0.48 USD"
    },
    "createdAt": "2025-05-16T02:40:40Z",
    "expiredAt": "2025-05-17T02:40:40Z",
    "customer": "",
    "status": "CREATED",
    "crypto": "ETH"
  },
  {
    "id": 20,
    "amount": {
      "crypto": "0.71",
      "fiat": "0.71 USD"
    },
    "createdAt": "2025-06-23T04:40:40Z",
    "expiredAt": "2025-06-24T04:40:40Z",
    "customer": "Chris Doe",
    "status": "PENDING",
    "crypto": "USDT-TRX"
  },
  {
    "id": 21,
    "amount": {
      "crypto": "0.97",
      "fiat": "0.97 USD"
    },
    "createdAt": "2025-07-01T11:40:40Z",
    "expiredAt": "2025-07-02T11:40:40Z",
    "customer": "Dat Tran",
    "status": "PENDING",
    "crypto": "USDT-ETH"
  },
  {
    "id": 22,
    "amount": {
      "crypto": "0.64",
      "fiat": "0.64 USD"
    },
    "createdAt": "2025-06-21T14:40:40Z",
    "expiredAt": "2025-06-22T14:40:40Z",
    "customer": "Ana Gomez",
    "status": "CREATED",
    "crypto": "TRX"
  },
  {
    "id": 23,
    "amount": {
      "crypto": "0.81",
      "fiat": "0.81 USD"
    },
    "createdAt": "2025-06-25T10:40:40Z",
    "expiredAt": "2025-06-26T10:40:40Z",
    "customer": "Dat Tran",
    "status": "EXPIRED",
    "crypto": "TRX"
  },
  {
    "id": 24,
    "amount": {
      "crypto": "0.36",
      "fiat": "0.36 USD"
    },
    "createdAt": "2025-07-09T21:40:40Z",
    "expiredAt": "2025-07-10T21:40:40Z",
    "customer": "Juan Lastra",
    "status": "PENDING",
    "crypto": "ETH"
  },
  {
    "id": 25,
    "amount": {
      "crypto": "0.83",
      "fiat": "0.83 USD"
    },
    "createdAt": "2025-06-26T12:40:40Z",
    "expiredAt": "2025-06-27T12:40:40Z",
    "customer": "Lee Wong",
    "status": "COMPLETED",
    "crypto": "USDT-ETH"
  },
  {
    "id": 26,
    "amount": {
      "crypto": "0.91",
      "fiat": "0.91 USD"
    },
    "createdAt": "2025-06-13T22:40:40Z",
    "expiredAt": "2025-06-14T22:40:40Z",
    "customer": "Juan Lastra",
    "status": "EXPIRED",
    "crypto": "ETH"
  },
  {
    "id": 27,
    "amount": {
      "crypto": "1.27",
      "fiat": "1.27 USD"
    },
    "createdAt": "2025-06-01T01:40:40Z",
    "expiredAt": "2025-06-02T01:40:40Z",
    "customer": "Chris Doe",
    "status": "CREATED",
    "crypto": "USDT-ETH"
  },
  {
    "id": 28,
    "amount": {
      "crypto": "0.54",
      "fiat": "0.54 USD"
    },
    "createdAt": "2025-06-06T19:40:40Z",
    "expiredAt": "2025-06-07T19:40:40Z",
    "customer": "Ana Gomez",
    "status": "CREATED",
    "crypto": "USDT-ETH"
  },
  {
    "id": 29,
    "amount": {
      "crypto": "0.23",
      "fiat": "0.23 USD"
    },
    "createdAt": "2025-07-09T22:40:40Z",
    "expiredAt": "2025-07-10T22:40:40Z",
    "customer": "Juan Lastra",
    "status": "COMPLETED",
    "crypto": "ETH"
  },
  {
    "id": 30,
    "amount": {
      "crypto": "0.53",
      "fiat": "0.53 USD"
    },
    "createdAt": "2025-05-26T05:40:40Z",
    "expiredAt": "2025-05-27T05:40:40Z",
    "customer": "Dat Tran",
    "status": "COMPLETED",
    "crypto": "USDT-TRX"
  }
].map(invoice => ({
  ...invoice,
  customer: getRandomCustomer()
}));