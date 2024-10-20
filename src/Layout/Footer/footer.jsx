import React from "react";
import {
  Container,
  Stack,
  Box,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { Subscribtion } from "../../Subscribtion";
import Logo from "../../assets/svg/logo.svg";
import { InstagramIcon } from "../../assets/icons/instagram-icon";
import { NavLink } from "react-router-dom";
import { FacebookIcon } from "../../assets/icons/facebook-icon";
import { TwitterIcon } from "../../assets/icons/twitter-icon";
import { PinterestIcon } from "../../assets/icons/pinterest-icon";
export const Footer = () => {
  return (
    <>
      <Subscribtion />
      <Box mb={"68px"}>
        <Container maxWidth="lg">
          <Stack direction={"row"} justifyContent={"center"} gap={"92px"}>
            <Box textAlign={"right"}>
              <Link href="#">
                <Typography mb={"32px"} variant="h5">
                  Contact Us
                </Typography>
              </Link>
              <Box mb={"40px"}>
                <Typography fontWeight={"700"} variant="body1">
                  Email
                </Typography>
                <Link href="mailto:needhelp@Organia.com">
                  <Typography variant="body1">needhelp@Organia.com</Typography>
                </Link>
              </Box>
              <Box mb={"40px"}>
                <Typography fontWeight={"700"} variant="body1">
                  Phone
                </Typography>
                <Link href="tel:666 888 888">
                  <Typography variant="body1">666 888 888</Typography>
                </Link>
              </Box>
              <Box mb={"40px"}>
                <Typography fontWeight={"700"} variant="body1">
                  Address
                </Typography>
                <Link href="88 road, borklyn street, USA">
                  <Typography variant="body1">
                    88 road, borklyn street, USA
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box
              textAlign={"center"}
              width={"543px"}
              borderRight={" 1px solid #d4d4d4"}
              borderLeft={" 1px solid #d4d4d4"}
              px={"42px"}
            >
              <Box mb={"23px"}>
                <NavLink to={"/"}>
                  <img src={Logo} alt="" />
                </NavLink>
              </Box>
              <Typography mb={"49px"} variant="body1">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing
              </Typography>
              <Stack
                direction={"row"}
                gap={"15px"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <IconButton>
                  <InstagramIcon />
                </IconButton>
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
                <IconButton>
                  <PinterestIcon />
                </IconButton>
              </Stack>
            </Box>
            <Box textAlign={"left"}>
              <Link href="#">
                <Typography mb={"24px"} variant="h5">
                  Utility Pages
                </Typography>
              </Link>
              <Box>
                <Link href="#">
                  <Typography mb={"20px"} variant="body1">
                    Style Guide
                  </Typography>
                </Link>
                <Link href="#">
                  <Typography mb={"20px"} variant="body1">
                    404 Not Found
                  </Typography>
                </Link>
                <Link href="#">
                  <Typography mb={"20px"} variant="body1">
                    Password Protected
                  </Typography>
                </Link>
                <Link href="#">
                  <Typography mb={"20px"} variant="body1">
                    Licences
                  </Typography>
                </Link>
                <Link href="#">
                  <Typography mb={"20px"} variant="body1">
                    Changelog
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box>
        <hr />
        <Typography py={"17px"} textAlign={"center"} variant="body1">
          Copyright © <span style={{ fontWeight: "700" }}>Organick</span> |
          Designed by <span style={{ fontWeight: "700" }}>VictorFlow</span>{" "}
          Templates - Powered by{" "}
          <span style={{ fontWeight: "700" }}>WebFlow</span>
        </Typography>
      </Box>
    </>
  );
};
