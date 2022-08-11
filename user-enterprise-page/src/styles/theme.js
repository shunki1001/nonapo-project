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
  },
});

export default theme;
