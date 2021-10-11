export interface ICard {
  balance: number;
  first_name: string;
  last_name: string;
  card_number: string;
  exp_month: string;
  exp_year: string;
  cvv: string | number;
  brand: string;
  limit?: number;
  spending?: number;
}
export interface ICardState {
  submitting: boolean;
  error: string | null;
  card: ICard | null;
}
