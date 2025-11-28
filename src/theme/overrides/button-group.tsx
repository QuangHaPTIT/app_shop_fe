// ** Type Import
import { OwnerStateThemeType } from '.'

const ButtonGroup = () => {
  return {
    MuiButtonGroup: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '& .MuiButtonGroup-grouped': {
            '&:not(:last-of-type)': {
              borderRight: `1px solid ${theme.palette.divider}`
            }
          }
        })
      }
    }
  }
}

export default ButtonGroup

