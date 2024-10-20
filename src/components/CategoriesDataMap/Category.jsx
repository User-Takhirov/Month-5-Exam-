import React from "react";
import { Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import { Colors } from "../../Config/Colors";
export const Category = ({ text, img }) => {
  const CustomButton = styled(Button)`
    border-radius: 20px;
    background-color: ${Colors.white};
    padding: 32px 53px;
    width: 320px;
    font-weight: 600;
    font-size: 17px;
    color: ${Colors.primary};
    height: 96px;
  `;

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          padding: "244px 146px",
          backgroundPosition: "center",
        }}
      >
        <CustomButton>{text}</CustomButton>
      </Box>
    </>
  );
};
