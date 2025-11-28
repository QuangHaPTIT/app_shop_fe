// ** Type Import
import { OwnerStateThemeType } from '.'

const Link = {
  MuiLink: {
    styleOverrides: {
      root: ({ theme }: OwnerStateThemeType) => ({
        textDecoration: 'none'
      })
    }
  }
}

export default Link

