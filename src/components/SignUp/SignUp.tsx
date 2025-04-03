import { Button, TextField } from "@mui/material";
import styled from "@/DefaultTheme";

export const SignUp = () => (
  <Root>
    <FormContainer>
      <TextField
        placeholder="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        type="email"
      />
      <TextField
        placeholder="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
      />
      <TextField
        placeholder="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
      />
      <StyledButton fullWidth>Registration</StyledButton>
    </FormContainer>
  </Root>
);

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  minHeight: "711px",
}));

const FormContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "346px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.error.main,
  marginTop: "1rem",
}));
