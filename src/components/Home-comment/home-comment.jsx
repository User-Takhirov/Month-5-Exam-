import React from "react";
import { CustomButton } from "../Custom-button/custom-button";
import { Box, Typography, Stack } from "@mui/material";
import { CommentIcon } from "../../assets/icons/comment-icon";
import { YellowButtonIcon } from "../../assets/icons/yellow-button-icon";
import styled from "@emotion/styled";
import { Colors } from "../../Config/Colors";
export const HomeComment = ({ title, text, img, badge, commentor }) => {
  const CustomBadge = styled("span")`
    font-weight: 800;
    font-size: 20px;
    text-align: center;
    padding: 15px 23px;
    color: ${Colors.primary};
    background-color: ${Colors.white};
    border-radius: 50%;
    width: 82px;
    height: 82px;
    display: inline-block;
  `;

  return (
    <>
      <Box position={"relative"}>
        <Box position={"relative"}>
          <Box top={"43px"} left={"32px"} position={"absolute"}>
            <CustomBadge>{badge}</CustomBadge>
          </Box>
          <img src={img} alt="#" />
        </Box>
        <Box
          width={"613px"}
          right={"50%"}
          sx={{ transform: "translateX(50%)" }}
          position={"absolute"}
          bottom={"-60px"}
          borderRadius={"32px"}
          padding={"46px 57px 60px 57px"}
          boxShadow={`0 20px 35px 0 rgba(167, 167, 167, 0.25);
background: #fff;`}
        >
          <Stack
            mb={"15px"}
            direction={"row"}
            alignItems={"center"}
            gap={"8px"}
          >
            <CommentIcon />
            <Typography variant="body1">{commentor}</Typography>
            <Box></Box>
          </Stack>
          <Typography mb={"2px"} variant="h6">
            {title}
          </Typography>
          <Typography mb={"15px"} variant="body1">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum
          </Typography>
          <Box>
            <CustomButton endIcon={<YellowButtonIcon />}>
              Read More
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};
