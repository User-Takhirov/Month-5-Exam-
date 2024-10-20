import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import { AboutAds1Icon } from "../../assets/icons/about-ads1-icon";
import { AboutAds2Icon } from "../../assets/icons/about-ads2-icon";
import { AboutAds3Icon } from "../../assets/icons/about-ads3-icon";
import { AboutAds4Icon } from "../../assets/icons/about-ads4-icon";
import { Colors } from "../../Config/Colors";

export const AboutAds = () => {
  return (
    <>
      <Stack direction={"row"} gap={"30px"} justifyContent={"center"}>
        <Box
          width={"257px"}
          textAlign={"center"}
          bgcolor={Colors.white}
          borderRadius={"30px"}
          padding={"50px 35px 19px 35px"}
        >
          <Box mb={"15px"}>
            <AboutAds1Icon />
          </Box>
          <Typography fontSize={"18px"} variant="h6" mb={"12px"}>
            Return Policy
          </Typography>
          <Typography variant="body1">
            Simply dummy text of the printintypesetting industry.
          </Typography>
        </Box>
        <Box
          width={"257px"}
          textAlign={"center"}
          bgcolor={Colors.white}
          borderRadius={"30px"}
          padding={"50px 35px 19px 35px"}
        >
          <Box mb={"15px"}>
            <AboutAds2Icon />
          </Box>
          <Typography fontSize={"18px"} variant="h6" mb={"12px"}>
            100% Fresh
          </Typography>
          <Typography variant="body1">
            Simply dummy text of the printintypesetting industry.
          </Typography>
        </Box>
        <Box
          width={"257px"}
          textAlign={"center"}
          bgcolor={Colors.white}
          borderRadius={"30px"}
          padding={"50px 35px 19px 35px"}
        >
          <Box mb={"15px"}>
            <AboutAds3Icon />
          </Box>
          <Typography fontSize={"18px"} variant="h6" mb={"12px"}>
            Support 24/7
          </Typography>
          <Typography variant="body1">
            Simply dummy text of the printintypesetting industry.
          </Typography>
        </Box>
        <Box
          width={"257px"}
          textAlign={"center"}
          bgcolor={Colors.white}
          borderRadius={"30px"}
          padding={"50px 35px 19px 35px"}
        >
          <Box mb={"15px"}>
            <AboutAds4Icon />
          </Box>
          <Typography
            width={"206px"}
            fontSize={"18px"}
            whiteSpace={"nowrap"}
            variant="h6"
            mb={"12px"}
          >
            Secured Payment
          </Typography>
          <Typography variant="body1">
            Simply dummy text of the printintypesetting industry.
          </Typography>
        </Box>
      </Stack>
    </>
  );
};
