export type TAnnounce = {
  id: string;
  pickupTaskId: string;
  orderId: string;
  tobaccoId: string;
  barcode: string;
  senderEmail: string;
  createDate: string;
  storeDays: number;
  expireDate: string;
  paymentsInfo: {
    paymentValue: number;
    paymentCurrency: string;
    priceValue: number;
    priceCurrency: string;
    deliveryCostValue: number;
    deliveryCostCurrency: string;
  };
  clientInfo: {
    clientOrderId: string;
    clientAuthCode: string;
    clientName: string;
    clientPhone: string;
    clientEmail: string;
  };
  dimension: {
    width: number;
    height: number;
    length: number;
    weight: number;
  };
  status: AnnounceStatus;
};

export enum AnnounceStatus {
  'EXPIRED' = 'EXPIRED',
  'PICKED_UP' = 'PICKED_UP',
  'BLOCKING_PICK_UP' = 'BLOCKING_PICK_UP',
  'CANCELLED' = 'CANCELLED',
  'WITHDRAWN' = 'WITHDRAWN',
  'WAITING_RECEIPT' = 'WAITING_RECEIPT',
  'RECEIVED' = 'RECEIVED',
}

export type TAnnounces = TAnnounce[];

export type TData = {
  content: TAnnounces;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
  pageable: {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
  };
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
};
