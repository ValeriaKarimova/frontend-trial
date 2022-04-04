export interface User {
  "_id": string,
  "amount": string,
  "type": string,
  "name": {
    "first": string,
    "last": string
  },
  "company": string,
  "email": string,
  "phone": string,
  "address": string
}

export interface Card {
  length: number,
  name: string | undefined,
  tabId: number
}

export const TRANSACTIONS = new Map()
TRANSACTIONS.set('0', 'income');
TRANSACTIONS.set('1', 'outcome');
TRANSACTIONS.set('2', 'loan');
TRANSACTIONS.set('3', 'investment');
