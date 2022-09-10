import { Grid, Group, Text, Title } from "@mantine/core";
import type { NextPage } from "next";
import { CardLayout } from "../components/card-layout";
import { CardForm } from "../components/layout/card-form";
import { FrontCard } from "../components/layout/front-card";

const Home: NextPage = () => {
  return (
    <>
      <Grid style={{ maxWidth: "100%", maxHeight: "100vh" }}>
        <Grid.Col span={5}>
          <CardLayout />
        </Grid.Col>
        <Grid.Col span={5}>
          <Group position="center" style={{ marginTop: "30vh" }}>
            <CardForm />
          </Group>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Home;
