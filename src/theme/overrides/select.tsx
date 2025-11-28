// ** Type Import
import { OwnerStateThemeType } from '.'

const Select = {
  MuiSelect: {
    styleOverrides: {
      root: ({ theme }: OwnerStateThemeType) => ({
        borderRadius: 6,
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.divider
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.primary.main
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.primary.main
        }
      })
    }
  }
}

export default Select

