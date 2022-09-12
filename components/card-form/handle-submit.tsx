export function handleSubmit({ cardProps }, { errorProps }) {
  const card = cardProps.cardValue;

  if (card.cardName == "") {
    errorProps.setNameError("Can't be blank");
  }
  if (card.cardNumber.length < 19) {
    errorProps.setNumberError("Invalid number");
  }
  if (card.cardDate == "") {
    errorProps.setDateError("Can't be blank");
  }
  if (card.cardCVC.length < 3) {
    errorProps.setCVCError("Invalid CVC");
  }
}
