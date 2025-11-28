// ** Type Import
import { OwnerStateThemeType } from '.'

const IconButton = {
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }: OwnerStateThemeType) => ({
        borderRadius: 8,
        padding: theme.spacing(1),
        '&:hover': {
          backgroundColor: theme.palette.action.hover
        }
      })
    }
  }
}

export default IconButton

