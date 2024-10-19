import styled from "@emotion/styled";

import { Colors } from "../../../Config/Colors";
import { Box, Button } from "@mui/material";

export const CustomBadge = styled(Button)`
  padding: 5px 12px;
  border-radius: 8px;
  background-color: ${Colors.primary};
  color: ${Colors.white};
  padding-top: 10px;
`;
