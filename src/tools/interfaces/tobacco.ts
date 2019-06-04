export type TShopInfo = {
  id: string;
  type: string;
  name: string;
  storeId: string;
  status: string;
  fullAddress: string;
  country: string;
  region: string;
  city: string;
  street: string;
  house: string;
  cardAllowed: boolean;
  cashAllowed: boolean;
  loyaltyAllowed: boolean;
  returnAllowed: boolean;
  timezone: string;
  openDate: string;
  closeDate: string;
  workHours: {
    friAfter: string;
    friBefore: string;
    monAfter: string;
    monBefore: string;
    satAfter: string;
    satBefore: string;
    sunAfter: string;
    sunBefore: string;
    thuAfter: string;
    thuBefore: string;
    tueAfter: string;
    tueBefore: string;
    wedAfter: string;
    wedBefore: string;
  };
  cellCount: number;
  cellLimit: {
    maxHeight: number;
    maxLength: number;
    maxWeight: number;
    maxWidth: number;
  };
  zipCode: string;
  phone: string;
  lat: number;
  lng: number;
};