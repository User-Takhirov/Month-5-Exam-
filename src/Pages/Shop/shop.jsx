import React from "react";
import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import ShopBg from "../../assets/img/shopBg.png";
import { Products } from "../../components/Products";
import { PorductsData } from "../../Data/Products";
export const Shop = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${ShopBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          py: "184px",
          mb: "90px",
        }}
      >
        <Typography textAlign={"center"} variant="h1">
          Shop
        </Typography>
      </Box>
      <Box>
        <Container maxWidth={"lg"}>
          <Box mb={"140px"}>
            <Grid2 container spacing={"20px"}>
              {PorductsData.slice(0, 12).map((item) => (
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
