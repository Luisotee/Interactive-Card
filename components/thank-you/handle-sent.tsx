export function handleSent({ cardProps }: any) {
  const card = cardProps.cardFunction;

  card.setCardName("");
  card.setCardNumber("");
  card.setCardDate("");
  card.setCardCVC("");

  cardProps.setSent(false);
}
