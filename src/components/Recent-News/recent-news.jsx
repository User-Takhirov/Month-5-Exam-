import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { CommentIcon } from "../../assets/icons/comment-icon";
import styled from "@emotion/styled";
import { Colors } from "../../Config/Colors";
import { ButtonIconContained } from "../../assets/icons/button-contained-icon";
export const RecentNews = ({ title, text, img, badge, commentor }) => {
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
          padding={"54px 57px 54px 57px"}
          boxShadow={`0 20px 35px 0 rgba(167, 167, 167, 0.25);
background: #fff;`}
        >
          <Stack
            mb={"15px"}
            direction={"row"}
            alignItems={"center"}
            gap={"8px"}
          >
            <Box color={Colors.lightGreen}>
              <CommentIcon />
            </Box>
            <Typography color={Colors.primary} variant="body1">
              {commentor}
            </Typography>
          </Stack>
          <Typography fontSize={"21px"} mb={"2px"} variant="h6">
            {title}
          </Typography>
          <Typography mb={"15px"} variant="body1">
            {text}
          </Typography>
          <Box>
            <Button variant="text" endIcon={<ButtonIconContained />}>
              Read More
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
