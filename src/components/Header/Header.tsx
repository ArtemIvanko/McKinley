import Logo from "@/assets/logo/logo.png";
import { Link } from "@utils/Link";
import { Button, useMediaQuery } from "@mui/material";
import { PHONE_NUMBER } from "@/common/constant";
import styled from "@/DefaultTheme";

export const Header = () => {
  const isDesktopResolution = useMediaQuery(({ breakpoints }) =>
    breakpoints.up("lg"),
  );

  return (
    <Root>
      <Wrapper>
        <StyledLogo src={Logo} alt="Logo" />
        <NavContainer>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/contact">Contact</Link>
        </NavContainer>
      </Wrapper>
      <Wrapper>
        {isDesktopResolution && <div>{PHONE_NUMBER}</div>}
        <Button variant="contained">Request Consultation</Button>
      </Wrapper>
    </Root>
  );
};

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  padding: "2rem",
  height: "100%",
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
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    gap: "2rem",
  },
}));

const StyledLogo = styled("img")(({ theme }) => ({
  width: "246px",
  height: "63px",
  [theme.breakpoints.up("lg")]: {
    width: "130px",
    height: "31px",
  },
}));

const NavContainer = styled("div")({
  display: "flex",
  padding: "1.5rem 0",
});
