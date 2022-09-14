import {
  Button,
  Grid,
  Group,
  Input,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import {
  FullSizeGroup,
  FullSizeGroupForm,
  StackForm,
} from "../../styles/css-components";

import { handleSubmit } from "./handle-submit";

const InputMask = require("react-input-mask");

export function CardForm({ cardProps }: any) {
  const card = cardProps.cardFunction;
  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");
  const [cvcError, setCVCError] = useState("");

  const errorProps = {
    setNameError: setNameError,
    setNumberError: setNumberError,
    setMonthError: setMonthError,
    setYearError: setYearError,
    setCVCError: setCVCError,
  };

  return (
    <FullSizeGroupForm>
      <StackForm spacing="xl">
        <Input.Label className="inputLabels">
          CARDHOLDER NAME
          <TextInput
            className="inputForm"
            placeholder="e.g. Jane Appleseed"
            onChange={card.setCardName}
            size="lg"
            error={nameError}
            radius="md"
          />
        </Input.Label>
        <Input.Label className="inputLabels">
          CARDHOLDER NUMBER
          <TextInput
            className="inputForm"
            placeholder="e.g. 1234 5678 9123 0000"
            component={InputMask}
            mask="9999 9999 9999 9999"
            maskPlaceholder={null}
            onChange={card.setCardNumber}
            size="lg"
            error={numberError}
            radius="md"
          />
        </Input.Label>
        <SimpleGrid cols={2} className="inputForm">
          <Input.Label className="inputLabels">
            EXP. DATE (MM/YY)
            <Grid>
              <Grid.Col span={1}>
                <TextInput
                  className="inputDate"
                  placeholder="MM"
                  component={InputMask}
                  mask="99"
                  maskPlaceholder={null}
                  onChange={card.setCardMonth}
                  size="lg"
                  error={monthError}
                  radius="md"
                />
              </Grid.Col>
              <Grid.Col span={1} offset={4.4}>
                <TextInput
                  className="inputDate"
                  placeholder="YY"
                  component={InputMask}
                  mask="99"
                  maskPlaceholder={null}
                  onChange={card.setCardYear}
                  size="lg"
                  error={yearError}
                  radius="md"
                />
              </Grid.Col>
            </Grid>
          </Input.Label>
          <Input.Label className="inputLabels">
            CVC
            <TextInput
              placeholder="e.g. 123"
              component={InputMask}
              maskPlaceholder={null}
              mask="999"
              onChange={card.setCardCVC}
              size="lg"
              error={cvcError}
              radius="md"
            />
          </Input.Label>
        </SimpleGrid>
        <Button
          className="inputForm"
          radius="md"
          size="lg"
          style={{ backgroundColor: "hsl(278, 68%, 11%)" }}
          onClick={() => handleSubmit({ cardProps }, { errorProps })}
        >
          Confirm
        </Button>
      </StackForm>
    </FullSizeGroupForm>
  );
}
