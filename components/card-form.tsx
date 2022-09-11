import { Button, Group, Input, Stack, TextInput } from "@mantine/core";
import { useInputState } from "@mantine/hooks";

const InputMask = require("react-input-mask");

export function CardForm({ card }) {
  console.log(card.cardNumber);
  return (
    <Stack>
      <Input.Wrapper label="CARDHOLDER NAME" required withAsterisk={false}>
        <TextInput
          placeholder="e.g. Jane Appleseed"
          onChange={card.setCardName}
        />
      </Input.Wrapper>
      <Input.Wrapper label="CARDHOLDER NUMBER" required withAsterisk={false}>
        <Input
          placeholder="e.g. 1234 5678 9123 0000"
          component={InputMask}
          mask="9999 9999 9999 9999"
          onChange={card.setCardNumber}
        />
      </Input.Wrapper>
      <Group>
        <Input.Wrapper label="EXP. DATE (MM/YY)" required withAsterisk={false}>
          <Input
            placeholder="MM/YY"
            component={InputMask}
            mask="99/99"
            onChange={card.setCardDate}
          />
        </Input.Wrapper>
        <Input.Wrapper label="CVC" required withAsterisk={false}>
          <Input
            placeholder="e.g. 123"
            component={InputMask}
            mask="999"
            onChange={card.setCardCVC}
          />
        </Input.Wrapper>
      </Group>
      <Button
        mt="md"
        radius="md"
        size="lg"
        style={{ backgroundColor: "hsl(278, 68%, 11%)" }}
      >
        Confirm
      </Button>
    </Stack>
  );
}
