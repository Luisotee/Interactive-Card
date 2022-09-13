export function handleSent({ cardProps }: any) {
  const card = cardProps.cardFunction;

  card.setCardName("");
  card.setCardNumber("");
  card.setCardYear("");
  card.setCardMonth("");
  card.setCardCVC("");

  cardProps.setSent(false);
}
