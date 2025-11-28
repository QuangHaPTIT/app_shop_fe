// ** Type Import
import { OwnerStateThemeType } from '.'

const Slider = () => {
  return {
    MuiSlider: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '& .MuiSlider-valueLabel': {
            borderRadius: 6,
            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[200] : theme.palette.grey[800]
          }
        })
      }
    }
  }
}

export default Slider

