import { SetStateAction } from "react";

export interface ICard {
  cardName: string;
  cardNumber: string;
  cardMonth: string;
  cardYear: string;
  cardCVC: string;
}

export interface CardViewProps {
  cardValue: ICard;
}

export interface setSentProps {
  setSent: React.Dispatch<SetStateAction<boolean>>;
}
