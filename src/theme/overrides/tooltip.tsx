// ** Type Import
import { OwnerStateThemeType } from '.'

const Tooltip = () => {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }: OwnerStateThemeType) => ({
          borderRadius: 6,
          fontSize: '0.75rem',
          padding: theme.spacing(1, 1.5)
        })
      }
    }
  }
}

export default Tooltip

