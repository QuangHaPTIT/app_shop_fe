// ** Type Import
import { OwnerStateThemeType } from '.'

const Autocomplete = (skin: string) => {
  return {
    MuiAutocomplete: {
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

export default Autocomplete

