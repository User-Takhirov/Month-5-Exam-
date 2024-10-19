import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../Layout/main-layout";
import { NavbarLink } from "../Data/NavbarLink";
import { ProductDetail } from "../components/ProductDetail";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {NavbarLink.map(({ path, element: Camp, id }) => {
          return <Route key={id} path={path} element={<Camp />} />;
        })}
        <Route path="product/detail/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
};
