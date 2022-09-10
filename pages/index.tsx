import { Grid, Group, Text, Title } from "@mantine/core";
import type { NextPage } from "next";
import { CardLayout } from "../components/card-layout";
import { FrontCard } from "../components/layout/front-card";

const Home: NextPage = () => {
  return (
    <>
      <Grid style={{ maxWidth: "100%", maxHeight: "100vh" }}>
        <Grid.Col span={6} order={1}>
          <CardLayout />
        </Grid.Col>
        <Grid.Col span={1} order={2}>
          <FrontCard src="bg-card-front.png" />
        </Grid.Col>
        <Grid.Col span={3} order={3}>
          <h1>OI</h1>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Home;
