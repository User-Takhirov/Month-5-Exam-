import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Box, Stack } from "@mui/material";

export const MainLayout = () => {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} minHeight="100vh">
        <header>
          <Header />
        </header>
        <main style={{ flexGrow: 1 }}>
          <Outlet />
        </main>
      </Box>
      <footer style={{ marginTop: "auto" }}>
        <Footer />
      </footer>
    </>
  );
};
