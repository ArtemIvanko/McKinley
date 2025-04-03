import { Button, Typography } from "@mui/material";
import styled from "@/DefaultTheme";

export const AdviceSection = () => (
  <Root>
    <Typography variant="h3">Need professional legal advice?</Typography>
    <Typography variant="body2">
      Get a free consultation with our legal experts
    </Typography>
    <Button variant="contained">Request Consultation</Button>
  </Root>
);

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  textAlign: "center",
  backgroundColor: theme.palette.secondary.light,
  minHeight: "545px",
}));
