import CityImage from "@/assets/img/city_image1.png";
import { Button, Typography } from "@mui/material";
import styled from "@/DefaultTheme";

export const Wrapper = () => (
  <Root>
    <StyledContainer>
      <ImageContainer>
        <Image src={CityImage} alt="City" loading="lazy" />
      </ImageContainer>
      <TextContainer>
        <Typography variant="h3">Corporate Legal Representation</Typography>
        <Typography variant="body2">
          We understand the difficulties and stress that your legal issues
          bring. Our team is committed to providing you with the individual
          attention, communication, and dedication you deserve.
        </Typography>
        <Button variant="contained">Request Consultation</Button>
      </TextContainer>
    </StyledContainer>
  </Root>
);

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.secondary.light,
  padding: "2rem 1rem",
  [theme.breakpoints.up("lg")]: {
    padding: "5rem 1rem",
  },
}));

const StyledContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateAreas: `
    "image"
    "text"
  `,
  gap: "2rem",
  textAlign: "center",
  maxWidth: "1350px",
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: `"text image"`,
    alignItems: "center",
    textAlign: "left",
  },
}));

const TextContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
  gridArea: "text",
  [theme.breakpoints.up("lg")]: {
    alignItems: "flex-start",
  },
}));

const ImageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gridArea: "image",
  overflow: "hidden",
  [theme.breakpoints.up("lg")]: {
    aspectRatio: "1 / 1",
  },
}));

const Image = styled("img")(() => ({
  width: "100%",
  height: "100%",
}));
