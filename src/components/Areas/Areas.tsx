import { Typography } from "@mui/material";
import { Card } from "@utils/Card";
import GlobeIcon from "@/assets/img/icon1.png";
import HouseIcon from "@/assets/img/icon2.png";
import TaxIcon from "@/assets/img/icon3.png";
import styled from "@/DefaultTheme";

export const Areas = () => (
  <Root>
    <StyledContainer>
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
          description="Tax law covers income, corporate, excise, luxury, estate, and property taxes, to name a few."
        />
      </CardContainer>
    </StyledContainer>
  </Root>
);

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
  padding: "2rem 1rem",
  [theme.breakpoints.up("lg")]: {
    padding: "4rem 1rem",
  },
}));

const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  maxWidth: "1350px",
  width: "100%",
  [theme.breakpoints.up("lg")]: {
    alignItems: "flex-start",
  },
}));

const CardContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "2rem",
  marginTop: "2rem",
  width: "100%",
  justifyItems: "center",
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}));
