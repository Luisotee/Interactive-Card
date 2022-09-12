import { Grid, Group, Text, Title } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import type { NextPage } from "next";
import { stringify } from "querystring";
import { useState } from "react";
import { CardForm } from "../components/card-form/card-form";
import { Cards } from "../components/card-layout/cards";
import React from "react";
import { ThankYou } from "../components/thank-you/thank-you";
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
      <Grid style={{ maxWidth: "100%", maxHeight: "100vh" }}>
        <Grid.Col span={5}>
          <Cards cardValue={cardValue} />
        </Grid.Col>
        <Grid.Col span={5}>
          <Group
            position="center"
            style={{ marginTop: "30vh", marginLeft: "10vw" }}
          >
            {isSent ? (
              <ThankYou cardProps={cardProps} />
            ) : (
              <CardForm cardProps={cardProps} />
            )}
          </Group>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Home;
