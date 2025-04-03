import styled from "@/DefaultTheme";
import { Button, Typography } from "@mui/material";

interface ICardProps {
  icon: string;
  title: string;
  date?: string;
  description?: string;
  hasButton?: boolean;
  fullWidth?: boolean;
}

export const Card = ({
  icon,
  title,
  date,
  description,
  hasButton,
  fullWidth = false,
}: ICardProps) => (
  <Root>
    <ImageContainer>
      <Image src={icon} alt={title} $fullWidth={fullWidth} />
    </ImageContainer>
    {date && <Typography variant="subtitle2">{date}</Typography>}
    <Typography variant="body2">{title}</Typography>
    {description && <Typography>{description}</Typography>}
    {hasButton && <StyledButton>Learn More &#x2192;</StyledButton>}
  </Root>
);

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  maxWidth: "397px",
  width: "100%",
  height: "auto",
  minHeight: "400px",
  boxShadow: "00px 20px 10px 2px rgba(0, 0, 0, 0.1)",
  padding: "2rem 1rem",
});

const ImageContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
});

const Image = styled("img")<{ $fullWidth: boolean }>(({ $fullWidth }) => ({
  ...($fullWidth && {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  }),
}));

const StyledButton = styled(Button)({
  padding: "0.5rem 0",
  borderRadius: "0",
  marginTop: "auto",
});
