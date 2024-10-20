import { Typography, Box } from "@mui/material";
import React from "react";
import { Colors } from "../../Config/Colors";

export const AboutOffer = ({ text, img }) => {
  return (
    <>
      <Box width={'334px'} textAlign={"center"}>
        <Box>
          <img src={img} alt="#" />
        </Box>
        <Typography variant="h5" color={Colors.white}>
          {text}
        </Typography>
      </Box>
    </>
  );
};
// width: 334px;
// height: 314px;