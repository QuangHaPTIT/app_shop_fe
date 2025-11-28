// ** Type Import
import { OwnerStateThemeType } from '.'

const FabButton = () => {
  return {
    MuiFab: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: theme.shadows[4],
          '&:hover': {
            boxShadow: theme.shadows[8]
          }
        })
      }
    }
  }
}

export default FabButton

