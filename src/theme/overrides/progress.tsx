// ** Type Import
import { OwnerStateThemeType } from '.'

const Progress = () => {
  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          height: 6,
          borderRadius: theme.shape.borderRadius,
          '& .MuiLinearProgress-bar': {
            borderRadius: theme.shape.borderRadius
          }
        })
      }
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '&.MuiCircularProgress-determinate': {
            color: theme.palette.primary.main
          }
        })
      }
    }
  }
}

export default Progress

