import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // Black
      light: "#FFFFFF", // White
      input: "rgb(125, 125, 125)", // Gray for input text
    },
    secondary: {
      main: "#46FF0D", // Green
    },
    warning: {
      // Add a new color
      main: "#FFB20D",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Nunito Sans", sans-serif', // Font family
  },
});
