import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";
import { Colors } from "../../Config/Colors";

export const CustomButton = styled(Button)({
  fontWeight: "700",
  fontSize: "20px",
  color: `${Colors.primary}`,
  padding: "28px 39px 28px 39px",
  backgroundColor: `${Colors.yellow}`,
  borderRadius: "16px",
});
