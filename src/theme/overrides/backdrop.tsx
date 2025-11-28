// ** Type Import
import { OwnerStateThemeType } from '.'

const Backdrop = () => {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          backgroundColor: `rgba(${theme.palette.customColors.main}, 0.5)`
        })
      }
    }
  }
}

export default Backdrop

