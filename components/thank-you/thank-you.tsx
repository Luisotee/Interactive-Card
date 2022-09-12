/* eslint-disable react/no-unescaped-entities */
import { Button, Image, Stack, Title } from "@mantine/core";

export function ThankYou({ setSent }) {
  return (
    <>
      <Stack align="center">
        <Image src="icon-complete.svg" alt="complete icon" width={80} />
        <Title order={1}>Thank You!</Title>
        <Title order={2} color="hsl(279, 6%, 55%)">
          We've added your card details
        </Title>
        <Button
          mt="md"
          radius="md"
          size="lg"
          style={{ backgroundColor: "hsl(278, 68%, 11%)" }}
          onClick={() => setSent(false)}
          fullWidth
        >
          Confirm
        </Button>
      </Stack>
    </>
  );
}
