import React from "react";
import { Box, Rating, Stack, Typography } from "@mui/material";
import { Colors } from "../../Config/Colors";
import { CustomBadge } from "./Components/badge";
import { Link } from "react-router-dom";
export const Products = ({ badge, id, img, title, pPrice, cPrice, rating }) => {
  return (
    <>
      <Box
        borderRadius={"30px"}
        bgcolor={Colors.darkWhite}
        padding={"29px 0 17px 0"}
      >
        <Box pl={"30px"}>
          <CustomBadge>{badge}</CustomBadge>
        </Box>
        <Box width={"335px"} height={"324px"}>
          <img height={"100%"} width={"100%"} src={img} alt="#" />
        </Box>
        <Box px={"27px"}>
          <Link style={{ textDecoration: "none" }} to={`/product/detail/${id}`}>
            <Typography
              mb={"16px"}
              fontSize={"20px"}
              fontWeight={"600"}
              variant="h3"
            >
              {title}
            </Typography>
          </Link>
          <hr style={{ border: "1px solid #dedddd" }} />
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
              <Typography
                color="#b8b8b8"
                fontSize={"15px"}
                fontWeight={"600"}
                sx={{ textDecoration: "line-through" }}
                variant="body1"
              >
                ${cPrice}
              </Typography>
              <Typography fontSize={"18px"} fontWeight={"700"} variant="body1">
                ${pPrice}
              </Typography>
            </Stack>
            <Rating value={rating} precision={0.5} readOnly />
          </Stack>
        </Box>
      </Box>
    </>
  );
};
