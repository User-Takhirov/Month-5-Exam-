import React from "react";
import { PorductsData } from "../../Data/Products";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Box,
  Container,
  Stack,
  Rating,
  Button,
  Grid2,
} from "@mui/material";
import productDetailBg from "../../assets/img/productDetailBg.jpg";
import { CustomBadge } from "../Products/Components/badge";
import { Colors } from "../../Config/Colors";
import { ButtonIconContained } from "../../assets/icons/button-contained-icon";
import { Products } from "../Products";
export const ProductDetail = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(100, 700);
  }, [id]);
  const data = PorductsData.find((item) => item.id === parseInt(id));
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${productDetailBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          py: "184px",
          mb: "90px",
        }}
      >
        <Typography textAlign={"center"} variant="h1">
          Shop Single
        </Typography>
      </Box>
      <Box>
        <Container maxWidth={"lg"}>
          <Box mb={"90px"}>
            {data && (
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={"88px"}
                justifyContent={"center"}
              >
                <Box position={"relative"}>
                  <Box
                    width={"600px"}
                    height={"600px"}
                    borderRadius={"30px"}
                    bgcolor={Colors.darkWhite}
                  >
                    <img width={"100%"} src={data.img} alt="#" />
                  </Box>
                  <Box position={"absolute"} top={"38px"} left={"35px"}>
                    <CustomBadge>{data.badge}</CustomBadge>
                  </Box>
                </Box>
                <Box width={"658px"}>
                  <Typography mb={"9px"} variant="h3">
                    {data.title}
                  </Typography>
                  <Box mb={"27px"}>
                    <Rating value={data.rating} readOnly />
                    <Stack direction={"row"} gap={"9px"} alignItems={"center"}>
                      <Typography
                        sx={{
                          textDecoration: "line-through",
                          fontWeight: "600",
                          fontSize: "20px",
                          color: `${Colors.cPrice}`,
                        }}
                      >
                        ${data.pPrice}
                      </Typography>
                      <Typography
                        sx={{
                          color: `${Colors.primary}`,
                          fontWeight: "700",
                          fontSize: "25px",
                        }}
                      >
                        ${data.cPrice}
                      </Typography>
                    </Stack>
                  </Box>
                  <Typography mb={"35px"} variant="body1">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem had ceased to been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley.
                  </Typography>
                  <Stack direction={"row"} alignItems={"center"} gap={"22px"}>
                    <Typography
                      fontWeight={"700"}
                      fontSize={"20px"}
                      color={Colors.primary}
                      variant="body1"
                    >
                      Quantity :
                    </Typography>
                    <Button
                      sx={{ width: "134px", height: "80px" }}
                      variant="outlined"
                    >
                      1
                    </Button>
                    <Button
                      endIcon={<ButtonIconContained />}
                      variant="contained"
                    >
                      Add To Cart
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            )}
          </Box>
          <Box textAlign={"center"} mb={"140px"}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={"20px"}
              justifyContent={"center"}
              mb={"27px"}
            >
              <Button sx={{ width: "363px" }} variant="contained">
                Product Description
              </Button>
              <Button sx={{ width: "309px" }} variant="outlined">
                Additional Info
              </Button>
            </Stack>
            <Typography variant="body1">
              Welcome to the world of natural and organic. Here you can discover
              the bounty of nature. We have grown on the principles of health,
              ecology, and care. We aim to give our customers a healthy
              chemical-free meal for perfect nutrition. It offers about 8–10%
              carbs. Simple sugars — such as glucose and fructose — make up 70%
              and 80% of the carbs in raw.
            </Typography>
          </Box>
          <Box mb={"140px"}>
            <Typography mb={"40px"} textAlign={"center"} variant="h3">
              Related Products
            </Typography>
            <Grid2 container spacing={"20px"}>
              {PorductsData.slice(0, 4).map((item) => (
                <Grid2 key={item.id}>
                  <Products
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    cPrice={item.cPrice}
                    pPrice={item.pPrice}
                    rating={item.rating}
                    badge={item.badge}
                  />
                </Grid2>
              ))}
            </Grid2>
          </Box>
        </Container>
      </Box>
    </>
  );
};

//
