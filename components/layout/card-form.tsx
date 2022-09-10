import { Button, Group, Input, Stack } from "@mantine/core";

export function CardForm() {
  return (
    <Stack>
      <Input.Wrapper label="CARDHOLDER NAME" required withAsterisk={false}>
        <Input placeholder="e.g. Jane Appleseed" />
      </Input.Wrapper>
      <Input.Wrapper label="CARDHOLDER NUMBER" required withAsterisk={false}>
        <Input placeholder="e.g. 1234 5678 9123 0000" />
      </Input.Wrapper>
      <Group>
        <Input.Wrapper label="EXP. DATE (MM/YY)" required withAsterisk={false}>
          <Input placeholder="MM/YY" />
        </Input.Wrapper>
        <Input.Wrapper label="CVC" required withAsterisk={false}>
          <Input placeholder="e.g. 123" />
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
