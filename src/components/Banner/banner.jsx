import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Bannerimg from "../../assets/img/Banner.png";
import { CustomButton } from "../Custom-button/custom-button";
import { Colors } from "../../Config/Colors";
import { YellowButtonIcon } from "../../assets/icons/yellow-button-icon";
export const Banner = () => {
  return (
    <Box
      pt={"287px"}
      pb={"257px"}
      sx={{
        backgroundImage: `url(${Bannerimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="lg">
        <Stack maxWidth={"610px"}>
          <Typography
            mb={"8px"}
            color="#68a47f"
            fontWeight={400}
            variant="h4"
            fontFamily={"Yellowtail"}
          >
            100% Natural Food
          </Typography>
          <Typography mb={"23px"} color={Colors.primary} variant="h1">
            Choose the best healthier way <br /> of life
          </Typography>
          <CustomButton
            endIcon={<YellowButtonIcon />}
            sx={{ width: "258px" }}
            variant="contained"
          >
            Explore Now
          </CustomButton>
        </Stack>
      </Container>
    </Box>
  );
};
