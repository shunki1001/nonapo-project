import { createTheme } from "@mui/material/styles";

export const fontFamily = ["Montserrat", "sans-serif"].join(",");

const theme = createTheme({
  pallete: {
    primary: {
      main: "#2469B3",
    },
    secondary: {
      main: "#000000",
    },
    text: {
      primary: "1B243D",
      secondary: "BFBFBF",
    },
  },
  typography: {
    fontFamily: fontFamily,
    fontSize: 14,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "h6" && {
            fontWeight: 700,
          }),
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" && {
            backgroundColor: "#5e72e4",
            color: "#ffffff",
            paddingLeft: "3em",
            paddingRight: "3em",
          }),
          ...(ownerState.variant === "outlined" && {
            border: "2px solid #5e72e4",
            color: "#5e72e4",
            paddingLeft: "3em",
            paddingRight: "3em",
          }),
        }),
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "#5E72E4",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          border: "none",
          boxShadow: "0px 3px 6px 0px #00000029",
          "& .MuiInput .MuiOutlinedInput-notchedOutline": {
            border: "0",
          },
          "& input": {
            fontWeight: 700,
          },
        },
      },
    },
  },
});

export default theme;
