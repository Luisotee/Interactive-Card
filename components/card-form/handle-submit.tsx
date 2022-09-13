import { setSentProps } from "../../interface";

export function handleSubmit({ cardProps }: any, { errorProps }: any) {
  const card = cardProps.cardValue;
  let isWrong = false;
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear().toString().slice(-2);

  if (card.cardName == "") {
    errorProps.setNameError("Can't be blank");
    isWrong = true;
  } else errorProps.setNameError("");
  if (card.cardNumber.length < 19) {
    errorProps.setNumberError("Invalid number");
    isWrong = true;
  } else errorProps.setNumberError("");

  if (card.cardMonth == "") {
    errorProps.setMonthError("Can't be blank");
    isWrong = true;
  } else if (card.cardMonth > 12 || card.cardMonth < 1) {
    errorProps.setMonthError("Invalid month");
    isWrong = true;
  } else if (
    card.cardMonth < month &&
    card.cardYear <= year &&
    card.cardYear < year &&
    year == ""
  ) {
    errorProps.setYearError("Expired card");
    errorProps.setMonthError("Expired card");
    isWrong = true;
  } else {
    errorProps.setYearError("");
    errorProps.setMonthError("");
  }
  if (card.cardYear == "") {
    errorProps.setYearError("Can't be blank");
    isWrong = true;
  } else if (
    card.cardYear < year &&
    (card.cardMonth > 12 || card.cardMonth < 1)
  ) {
    errorProps.setYearError("Expired card");
    errorProps.setMonthError("Invalid month");
    isWrong = true;
  } else if (card.cardYear < year) {
    errorProps.setYearError("Expired card");
    errorProps.setMonthError("Expired card");
    isWrong = true;
  } else errorProps.setYearError("");

  if (card.cardCVC.length < 3) {
    errorProps.setCVCError("Invalid CVC");
    isWrong = true;
  } else errorProps.setCVCError("");

  if (!isWrong) {
    cardProps.setSent(true);
  }
}
