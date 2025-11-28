// ** Type Import
import { OwnerStateThemeType } from '.'

const ToggleButton = {
  MuiToggleButton: {
    styleOverrides: {
      root: ({ theme }: OwnerStateThemeType) => ({
        borderRadius: 6,
        border: `1px solid ${theme.palette.divider}`,
        '&.Mui-selected': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark
          }
        }
      })
    }
  }
}

export default ToggleButton

