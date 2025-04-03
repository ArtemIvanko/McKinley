import { Typography } from "@mui/material";
import { Card } from "@utils/Card";
import Apartment1 from "@assets/img/image1.png";
import Apartment2 from "@assets/img/image2.png";
import Apartment3 from "@assets/img/image3.png";
import styled from "@/DefaultTheme";

export const RecentArticles = () => (
  <Root>
    <Typography variant="h3">Recent Articles</Typography>
    <CardContainer>
      <Card
        icon={Apartment1}
        title="12 Things About Web Design Your Boss Wants To Know"
        date="December 13, 2020"
        hasButton
        fullWidth
      />
      <Card
        icon={Apartment2}
        title="The History Of Web Design"
        date="December 10, 2020"
        hasButton
        fullWidth
      />
      <Card
        icon={Apartment3}
        title="How to improve Web Design Process"
        date="December 10, 2020"
        hasButton
        fullWidth
      />
    </CardContainer>
  </Root>
);

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  width: "100%",
  padding: "2rem 1rem",
  [theme.breakpoints.up("lg")]: {
    padding: "4rem 5rem",
    alignItems: "flex-start",
  },
}));

const CardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  gap: "3rem",
  padding: "0 3rem",
  width: "100%",
  [theme.breakpoints.up("lg")]: {
    padding: "0 2rem",
    flexDirection: "row",
  },
}));
