// ** Type Import
import { OwnerStateThemeType } from '.'

const Rating = () => {
  return {
    MuiRating: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.warning.main
        })
      }
    }
  }
}

export default Rating

