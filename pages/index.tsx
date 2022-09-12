import { Grid, Group, Text, Title } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import type { NextPage } from "next";
import { stringify } from "querystring";
import { CardForm } from "../components/card-form/card-form";
import { Cards } from "../components/card-layout/cards";

const Home: NextPage = () => {
  const [cardName, setCardName] = useInputState("");
  const [cardNumber, setCardNumber] = useInputState("");
  const [cardDate, setCardDate] = useInputState("");
  const [cardCVC, setCardCVC] = useInputState("");

  const cardFunction = {
    setCardName: setCardName,
    setCardNumber: setCardNumber,
    setCardDate: setCardDate,
    setCardCVC: setCardCVC,
  };

  const cardValue = {
    cardName: cardName,
    cardNumber: cardNumber,
    cardDate: cardDate,
    cardCVC: cardCVC,
  };

  const cardProps = {
    cardFunction: cardFunction,
    cardValue: cardValue,
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
            <CardForm cardProps={cardProps} />
          </Group>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Home;
