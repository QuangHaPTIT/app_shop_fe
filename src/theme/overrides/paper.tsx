// ** Type Import
import { OwnerStateThemeType } from '.'

const Paper = {
  MuiPaper: {
    styleOverrides: {
      root: ({ theme }: OwnerStateThemeType) => ({
        backgroundImage: 'none'
      })
    }
  }
}

export default Paper

