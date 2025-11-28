// ** Type Import
import { OwnerStateThemeType } from '.'

const Dialog = (skin: string) => {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: theme.shadows[skin === 'bordered' ? 0 : 10],
          ...(skin === 'bordered' && {
            border: `1px solid ${theme.palette.divider}`
          })
        })
      }
    }
  }
}

export default Dialog

