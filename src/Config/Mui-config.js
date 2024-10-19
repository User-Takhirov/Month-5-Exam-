import { createTheme } from "@mui/material";
import { Colors } from "./Colors";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 900,
      lg: 1448,
      xl: 1648,
    },
  },
  typography: {

    h1: {
      fontWeight: 800,
      fontSize: "70px",
      color: `${Colors.primary}`,
    },
    h2: {
      fontWeight: 800,
      fontSize: "50px",
      color: `${Colors.primary}`,
    },
    h3: {
      fontWeight: 800,
      fontSize: "40px",
      color: `${Colors.primary}`,
    },
    h4: {
      fontWeight: 800,
      fontSize: "35px",
      color: `${Colors.primary}`,
    },
    h5: {
      fontWeight: 800,
      fontSize: "30px",
      color: `${Colors.primary}`,
    },
    h6: {
      fontWeight: 800,
      fontSize: "25px",
      color: `${Colors.primary}`,
    },
    body1: {
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "165%",
      color: `${Colors.darkGrey}`,
    },
    body2: {
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "165%",
      color: `${Colors.primary}`,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            fontWeight: 700,
            fontSize: "20px",
            color: `${Colors.white}`,
            padding: "28px 39px 28px 39px",
            backgroundColor: `${Colors.primary}`,
            borderRadius: "16px",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            fontWeight: 700,
            fontSize: "20px",
            color: `${Colors.primary}`,
            padding: "28px 39px 28px 39px",
            backgroundColor: `${Colors.white}`,
            borderRadius: "16px",
            border: `1px solid ${Colors.primary}`,
          },
        },
      ],
    },
  },
});
