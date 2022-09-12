import {
  Button,
  Group,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import { handleSubmit } from "./handle-submit";

const InputMask = require("react-input-mask");

export function CardForm({ cardProps }: any) {
  const card = cardProps.cardFunction;
  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [dateError, setDateError] = useState("");
  const [cvcError, setCVCError] = useState("");

  const errorProps = {
    setNameError: setNameError,
    setNumberError: setNumberError,
    setDateError: setDateError,
    setCVCError: setCVCError,
  };

  return (
    <Stack>
      <TextInput
        label="CARDHOLDER NAME"
        placeholder="e.g. Jane Appleseed"
        onChange={card.setCardName}
        size="lg"
        error={nameError}
      />

      <TextInput
        label="CARDHOLDER NUMBER"
        placeholder="e.g. 1234 5678 9123 0000"
        component={InputMask}
        mask="9999 9999 9999 9999"
        maskPlaceholder={null}
        onChange={card.setCardNumber}
        size="lg"
        error={numberError}
      />

      <SimpleGrid cols={2}>
        <TextInput
          label="EXP. DATE (MM/YY)"
          placeholder="MM/YY"
          component={InputMask}
          mask="99/99"
          onChange={card.setCardDate}
          size="lg"
          error={dateError}
        />

        <TextInput
          label="CVC"
          placeholder="e.g. 123"
          component={InputMask}
          maskPlaceholder={null}
          mask="999"
          onChange={card.setCardCVC}
          size="lg"
          error={cvcError}
        />
      </SimpleGrid>
      <Button
        mt="md"
        radius="md"
        size="lg"
        style={{ backgroundColor: "hsl(278, 68%, 11%)" }}
        onClick={() => handleSubmit({ cardProps }, { errorProps })}
      >
        Confirm
      </Button>
    </Stack>
  );
}
