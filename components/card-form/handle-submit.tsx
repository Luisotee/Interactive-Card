import { setSentProps } from "../../interface";

export function handleSubmit({ cardProps }: any, { errorProps }: any) {
  const card = cardProps.cardValue;

  let isWrong = false;

  if (card.cardName == "") {
    errorProps.setNameError("Can't be blank");
    isWrong = true;
  } else errorProps.setNameError("");
  if (card.cardNumber.length < 19) {
    errorProps.setNumberError("Invalid number");
    isWrong = true;
  } else errorProps.setNumberError("");
  if (card.cardDate == "") {
    errorProps.setDateError("Can't be blank");
    isWrong = true;
  } else errorProps.setDateError("");
  if (card.cardCVC.length < 3) {
    errorProps.setCVCError("Invalid CVC");
    isWrong = true;
  } else errorProps.setCVCError("");

  if (!isWrong) {
    cardProps.setSent(true);
  }
}
