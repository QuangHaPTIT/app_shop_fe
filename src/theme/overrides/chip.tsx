// ** Type Import
import { OwnerStateThemeType } from '.'

const Chip = () => {
  return {
    MuiChip: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          fontWeight: 500,
          fontSize: '0.75rem',
          '&.MuiChip-rounded': {
            borderRadius: 4
          }
        })
      }
    }
  }
}

export default Chip

