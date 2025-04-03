import { Typography } from "@mui/material";
import { Card } from "@utils/Card";
import GlobeIcon from "@/assets/img/icon1.png";
import HouseIcon from "@/assets/img/icon2.png";
import TaxIcon from "@/assets/img/icon3.png";
import styled from "@/DefaultTheme";

export const Areas = () => (
  <Root>
    <Typography variant="h3">Areas of Practice</Typography>
    <Typography variant="body2">
      Our disciplined approach to resolving your legal issues will produce the
      best-possible outcome.
    </Typography>
    <CardContainer>
      <Card
        icon={GlobeIcon}
        title="Intellectual Property"
        description="Intellectual Property law deals with laws to protect creators and owners of inventions, writing, music, designs and other works."
        hasButton
      />
      <Card
        icon={HouseIcon}
        title="Real Estate"
        hasButton
        description="Real estate law is a branch of civil law that covers the right to possess, use, and enjoy land."
      />
      <Card
        icon={TaxIcon}
        title="Tax Law"
        hasButton
        description="Tax law cover income, corporate, excise, luxury, estate and property taxes, to name a few."
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
  marginTop: "2rem",
  padding: "0 3rem",
  width: "100%",
  [theme.breakpoints.up("lg")]: {
    padding: "0 2rem",
    flexDirection: "row",
  },
}));
