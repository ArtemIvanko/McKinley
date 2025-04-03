import { Button, Typography } from "@mui/material";
import BackgroundImage from "@/assets/img/bg1.png";
import styled from "@/DefaultTheme";

export const Banner = () => (
  <Root>
    <TextContainer>
      <Typography variant="h4">Corporate Legal Representation</Typography>
      <Typography variant="body1">
        We understand the difficulties and stress that your legal issues bring.
        Our team is committed to providing you with the individual attention,
        communication, and dedication you deserve.
      </Typography>
      <StyledButton variant="contained">About Our Firm</StyledButton>
    </TextContainer>
  </Root>
);

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundImage: `url(${BackgroundImage})`,
  margin: "2rem 0",
  alignItems: "center",
  backgroundSize: "cover",
  padding: "3rem 2rem",
  [theme.breakpoints.up("lg")]: {
    margin: "4rem 5rem",
    textAlign: "center",
    justifyContent: "end",
    alignItems: "flex-end",
    padding: 0,
    minHeight: "680px",
  },
}));

const TextContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "start",
  gap: "2rem",
  maxWidth: "423px",
  color: theme.palette.secondary.main,
  padding: "4rem 3rem",
  [theme.breakpoints.up("lg")]: {
    alignItems: "flex-start",
  },
  background: theme.palette.primary.main,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
}));
