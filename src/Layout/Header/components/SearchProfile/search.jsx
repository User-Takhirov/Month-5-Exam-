import React from "react";
import { SearchInput } from "../search";
import { SearchIcon } from "../../../../assets/icons/search-icon";
import { Colors } from "../../../../Config/Colors";
import {
  Box,
  Stack,
  InputAdornment,
  Typography,
  IconButton,
} from "@mui/material";
import { CartIcon } from "../../../../assets/icons/cart-icon";

export const SearchCart = () => {
  return (
    <>
      <Stack direction={"row"} gap={"18px"}>
        <SearchInput
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "36px",
              padding: "5px 6px 5px 0",
              backgroundColor: `${Colors.darkWhite}`,
            },
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
        <Stack
          sx={{ cursor: "pointer" }}
          padding={"5px 23px 5px 6px"}
          border={"1px solid #BFBFBF"}
          borderRadius={"33px"}
          direction={"row"}
          alignItems={"center"}
          width={"170px"}
          gap={"12px"}
        >
          <IconButton sx={{ padding: "0" }}>
            <CartIcon />
          </IconButton>
          <Typography fontWeight={"600"} fontSize={"18px"} variant="body2">
            Cart (0)
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};
