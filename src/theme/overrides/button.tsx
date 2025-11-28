// ** Type Import
import { OwnerStateThemeType } from '.'

const Button = () => {
  return {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 6,
          padding: `${theme.spacing(1.5, 3)}`
        }),
        contained: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: theme.shadows[3],
          padding: `${theme.spacing(1.5, 3)}`
        }),
        containedPrimary: ({ theme }: OwnerStateThemeType) => ({
          '&:hover': {
            backgroundColor: theme.palette.primary.dark
          }
        })
      }
    }
  }
}

export default Button

