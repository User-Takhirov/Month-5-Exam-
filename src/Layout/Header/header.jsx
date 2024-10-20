import React from "react";
import { Container, Typography, Box, Stack } from "@mui/material";
import logo from "../../assets/svg/logo.svg";
import { NavbarLink } from "../../Data/NavbarLink";
import { Link } from "react-router-dom";
import { SearchCart } from "./components/SearchProfile";

export const Header = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Stack direction={"row"} justifyContent={"space-between"} py={"69px"}>
          <Stack direction={"row"} gap={"150px"} alignItems={"center"}>
            <Box>
              <Link to={'/'}>
              
              <img src={logo} alt="#" />
              </Link>
            </Box>
            <Stack direction={"row"} gap={"50px"}>
              {NavbarLink.map((item) => (
                <Link
                  to={item.path}
                  style={{ textDecoration: "none" }}
                  key={item.id}
                >
                  <Typography fontSize={"20px"} variant="h6">
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Stack>
          <SearchCart />
        </Stack>
      </Container>
    </>
  );
};
