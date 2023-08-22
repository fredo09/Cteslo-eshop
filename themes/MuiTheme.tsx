/**
 * Create theme for layout
 */

import { ReactNode } from "react";
import { lightTheme } from "./index";
import { CssBaseline, ThemeProvider } from "@mui/material";

export const MuiTheme = ({ children }: { children: ReactNode }) => {
  let theme = lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
