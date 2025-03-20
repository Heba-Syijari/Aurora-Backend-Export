'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import React from 'react';
import { componentsOverrides } from './components';
import { palette, Palette } from './palette';
import { typography } from './typography';

type Props = {
  children: React.ReactNode;
  fontFamily: string;
  palette: Palette;
};

export default function ThemeProvider({ children, fontFamily, palette: paletteInfo }: Props) {
  const theme = createTheme({
    typography: typography(fontFamily),
    palette: palette(paletteInfo),
  });

  theme.components = componentsOverrides(theme) as any;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
