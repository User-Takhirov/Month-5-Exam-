import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../Layout/main-layout";
import { NavbarLink } from "../Data/NavbarLink";
import { ProductDetail } from "../components/ProductDetail";
import { Typography, Box, Button } from "@mui/material";
import { DataNotFoundIcon } from "../assets/icons/Data-not-found-icon";
import { ButtonIconContained } from "../assets/icons/button-contained-icon";
import DataNotFound from "../assets/img/DataNotFound.png";
export const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {NavbarLink.map(({ path, element: Camp, id }) => {
          return <Route key={id} path={path} element={<Camp />} />;
        })}
        <Route path="product/detail/:id" element={<ProductDetail />} />
        <Route
          path="*"
          element={
            <>
              <Box
                py={"214px"}
                pr={"260px"}
                mb={"130px"}
                sx={{
                  backgroundImage: `url(${DataNotFound})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Box ml={"auto"} width={"566px"}>
                  <Box>
                    <DataNotFoundIcon />
                  </Box>
                  <Typography mb={"20px"} variant="h1">
                    Page not found
                  </Typography>
                  <Typography mb={"40px"} variant="body1">
                    The page you are looking for doesn't exist or has been moved
                  </Typography>
                  <Box>
                    <Button
                      endIcon={<ButtonIconContained />}
                      variant={"contained"}
                    >
                      Go to Homepage
                    </Button>
                  </Box>
                </Box>
              </Box>
            </>
          }
        />
      </Route>
    </Routes>
  );
};
