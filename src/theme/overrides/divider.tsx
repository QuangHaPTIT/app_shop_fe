// ** Type Import
import { OwnerStateThemeType } from '.'

const Divider = () => {
  return {
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          borderColor: theme.palette.divider
        })
      }
    }
  }
}

export default Divider

