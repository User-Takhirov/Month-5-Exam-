import { Stack, Typography, Button, Box, Container } from "@mui/material";
import BgImg from "../assets/img/SubscribtionBg.png";
import React from "react";
import { Colors } from "../Config/Colors";

export const Subscribtion = () => {
  return (
    <>
      <Box mb={"117px"}>
        <Container maxWidth={"lg"}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            py={"105px"}
            px={"71px"}
            sx={{
              backgroundImage: `url(${BgImg})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <Box m={"auto 0"} width={"420px"}>
              <Typography color={Colors.white} variant="h2">
                Subscribe to our Newsletter
              </Typography>
            </Box>
            <Stack direction={"row"} alignItems={"center"} gap={"6px"}>
              <Box width={"349px"}>
                <input
                  style={{
                    padding: "29px 50px 29px 23px",
                    width: "100%",
                    borderRadius: "16px",
                    border: "none",
                    textTransform: "capitalize",
                    fontStyle: "italic",
                    fontSize: "18px",
                    fontWeight: "400",
                    outlineColor: "#ababab",
                  }}
                  placeholder="Your Email Address"
                  type="text"
                />
              </Box>
              <Box>
                <Button sx={{ height: "79px" }} variant={"contained"}>
                  Subscribe
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
