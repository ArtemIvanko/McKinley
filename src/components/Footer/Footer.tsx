import { COPYRIGHT, POWERED_BY } from "@/common/constant";
import { Typography } from "@mui/material";
import styled from "@/DefaultTheme";

export const Footer = () => (
  <Root>
    <Wrapper>
      <Typography>{COPYRIGHT}</Typography>
      <Typography>{POWERED_BY}</Typography>
    </Wrapper>
    <Wrapper>
      <Typography>Style Guide</Typography>
      <Typography>Licensing</Typography>
    </Wrapper>
  </Root>
);

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  padding: "1rem 1rem",
  color: theme.palette.primary.light,
  background: theme.palette.primary.dark,
  gap: "1rem",
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    padding: "1rem 2rem",
  },
}));

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));
