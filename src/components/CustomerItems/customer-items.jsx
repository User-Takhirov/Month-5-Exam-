import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../Config/Colors";

export const CustomerItems = ({ text, process }) => {
  return (
    <>
      <Box
        width={"211px"}
        borderRadius={"50%"}
        border={`7px solid ${Colors.lightGreen}`}
      >
        <Box borderRadius={"50%"} border={`5px solid ${Colors.white}`}>
          <Box
            textAlign={"center"}
            padding={"53px 33px "}
            borderRadius={"50%"}
            bgcolor={Colors.rounded}
          >
            <Typography variant="h2">{process}</Typography>
            <Typography fontWeight={"600"} fontSize={"14px"} variant="body1">
              {text}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
