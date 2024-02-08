import React from "react";
import logo from "../../assets/logo.svg";
import { Container, Stack } from "@mui/material";
// import { Search } from "./components/search/search";
import { Login } from "./components/auth/login";
import { HeaderWrapper } from "./header-style";
import { Rukn } from "./components/rukn/rukn";
import Search from "./components/search/search";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Stack direction="row" justifyContent="space-between">
          <a href="#">
            <img src={logo} alt=""   />
          </a>
          <Rukn />
          <Search />
          <Login />
        </Stack>
      </Container>
    </HeaderWrapper>
  );
};
