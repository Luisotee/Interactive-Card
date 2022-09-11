export interface ICard {
  cardName: string;
  cardNumber: string;
  cardDate: string;
  cardCVC: string;
}

export interface CardViewProps {
  cardValue: ICard;
}
