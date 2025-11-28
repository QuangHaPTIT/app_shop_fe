// ** Type Import
import { OwnerStateThemeType } from '.'

const Typography = {
  MuiTypography: {
    styleOverrides: {
      root: ({ theme }: OwnerStateThemeType) => ({
        '& a': {
          color: theme.palette.primary.main,
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline'
          }
        }
      })
    }
  }
}

export default Typography

