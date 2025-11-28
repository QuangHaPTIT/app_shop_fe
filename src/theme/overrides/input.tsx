// ** Type Import
import { OwnerStateThemeType } from '.'

const Input = () => {
  return {
    MuiInput: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '&:before': {
            borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
          },
          '&:not(.Mui-disabled):hover:before': {
            borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
          }
        })
      }
    }
  }
}

export default Input

