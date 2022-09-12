import { SetStateAction } from "react";

export interface ICard {
  cardName: string;
  cardNumber: string;
  cardDate: string;
  cardCVC: string;
}

export interface CardViewProps {
  cardValue: ICard;
}

export interface setSentProps {
  isSent: boolean;
  setSent: React.Dispatch<SetStateAction<boolean>>;
}
