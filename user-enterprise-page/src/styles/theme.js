import { createTheme } from "@mui/material/styles";

export const fontFamily = ["Montserrat", "sans-serif"].join(",");

const theme = createTheme({
  pallete: {
    primary: {
      main: "#2469B3",
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
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({}),
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" && {
            backgroundColor: "#5e72e4",
            color: "#ffffff",
            paddingLeft: "3em",
            paddingRight: "3em",
          }),
          ...(ownerState.variant === "outlined" && {
            borderColor: "#5e72e4",
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
        },
      },
    },
  },
});

export default theme;
