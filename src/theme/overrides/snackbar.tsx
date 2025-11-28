// ** Type Import
import { OwnerStateThemeType } from '.'

const Snackbar = (skin: string) => {
  return {
    MuiSnackbar: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '& .MuiSnackbarContent': {
            borderRadius: 8,
            boxShadow: theme.shadows[skin === 'bordered' ? 0 : 10],
            ...(skin === 'bordered' && {
              border: `1px solid ${theme.palette.divider}`
            })
          }
        })
      }
    }
  }
}

export default Snackbar

