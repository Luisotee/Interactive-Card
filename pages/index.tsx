import { Group, SimpleGrid } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { NextPage } from "next";
import React, { useState } from "react";
import { CardForm } from "../components/card-form/card-form";
import { Cards } from "../components/card-layout/cards";

React.useLayoutEffect = React.useEffect;

const Home: NextPage = () => {
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
      <SimpleGrid cols={2}>
        <Group>
          <Cards cardValue={cardValue} />
        </Group>
        <Group>
          <CardForm cardProps={cardProps} />
        </Group>
      </SimpleGrid>
    </>
  );
};

export default Home;
