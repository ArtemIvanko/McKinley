import CityImage from "@/assets/img/city_image1.png";
import { Button, Typography } from "@mui/material";
import styled from "@/DefaultTheme";

export const Wrapper = () => (
  <Root>
    <ImageContainer>
      <Image src={CityImage} alt="City" loading="lazy" />
    </ImageContainer>
    <TextContainer>
      <Typography variant="h3">Corporate Legal Representation</Typography>
      <Typography variant="body2">
        We understand the difficulties and stress that your legal issues bring.
        Our team is committed to providing you with the individual attention,
        communication, and dedication you deserve.
      </Typography>
      <Button variant="contained">Request Consultation</Button>
    </TextContainer>
  </Root>
);

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
  textAlign: "center",
  backgroundColor: theme.palette.secondary.light,
  padding: "2rem 1rem",
  [theme.breakpoints.up("lg")]: {
    padding: "5rem 4rem",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    textAlign: "left",
  },
}));

const TextContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
  [theme.breakpoints.up("lg")]: {
    alignItems: "flex-start",
  },
}));

const ImageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "auto",
  [theme.breakpoints.up("lg")]: {
    height: "522px",
    width: "fit-content",
  },
}));

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  [theme.breakpoints.up("lg")]: {
    width: "100%",
    height: "100%",
  },
}));
