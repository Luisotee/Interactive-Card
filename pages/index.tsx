import { Group, SimpleGrid, Stack } from "@mantine/core";
import { useInputState, useMediaQuery } from "@mantine/hooks";
import { NextPage } from "next";
import React, { useState } from "react";
import { CardForm } from "../components/card-form/card-form";
import { Cards } from "../components/card-layout/cards";
import { ThankYou } from "../components/thank-you/thank-you";

React.useLayoutEffect = React.useEffect;

const Home: NextPage = () => {
  const isMobile = useMediaQuery("(min-width: 1080px)");

  const [isSent, setSent] = useState(false);

  const [cardName, setCardName] = useInputState("");
  const [cardNumber, setCardNumber] = useInputState("");
  const [cardMonth, setCardMonth] = useInputState("");
  const [cardYear, setCardYear] = useInputState("");
  const [cardCVC, setCardCVC] = useInputState("");

  const cardFunction = {
    setCardName: setCardName,
    setCardNumber: setCardNumber,
    setCardMonth: setCardMonth,
    setCardYear: setCardYear,
    setCardCVC: setCardCVC,
  };

  const cardValue = {
    cardName: cardName,
    cardNumber: cardNumber,
    cardMonth: cardMonth,
    cardYear: cardYear,
    cardCVC: cardCVC,
  };

  const cardProps = {
    cardFunction: cardFunction,
    cardValue: cardValue,
    isSent: isSent,
    setSent: setSent,
  };

  return (
    <>
      {isMobile ? (
        <SimpleGrid cols={2}>
          <Cards cardValue={cardValue} />
          {isSent ? (
            <ThankYou cardProps={cardProps} />
          ) : (
            <CardForm cardProps={cardProps} />
          )}
        </SimpleGrid>
      ) : (
        <Stack style={{ width: "auto" }}>
          <Cards cardValue={cardValue} />
          {isSent ? (
            <ThankYou cardProps={cardProps} />
          ) : (
            <CardForm cardProps={cardProps} />
          )}
        </Stack>
      )}
    </>
  );
};

export default Home;
