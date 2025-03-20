import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Chip(theme: Theme) {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: theme.spacing(4),
          backgroundColor: theme.palette.background.neutral,
          color: theme.palette.primary.main,
          fontSize: 12,
        },
      },
    },
  };
}
