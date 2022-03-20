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

export const INFO = new Map()
INFO.set('0', 'income');
INFO.set('1', 'outcome');
INFO.set('2', 'loan');
INFO.set('3', 'investment');
