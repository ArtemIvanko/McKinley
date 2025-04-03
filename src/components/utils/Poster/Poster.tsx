import styled from "@/DefaultTheme";
import { Typography } from "@mui/material";

export const Poster = () => (
  <Root>
    <Typography>
      We have moved into our brand new downtown office at the corner of Broadway
      and Bellview
    </Typography>
  </Root>
);

const Root = styled("div")(({ theme }) => ({
  padding: "1.5rem 2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  background: theme.palette.primary.main,
  color: theme.palette.primary.light,
  height: "100%",
  [theme.breakpoints.up("lg")]: {
    padding: "0.5rem 2rem",
  },
}));
