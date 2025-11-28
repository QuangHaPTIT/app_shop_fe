// ** Type Import
import { OwnerStateThemeType } from '.'

const Breadcrumb = () => {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '& a': {
            textDecoration: 'none',
            color: theme.palette.text.primary,
            '&:hover': {
              textDecoration: 'underline'
            }
          }
        })
      }
    }
  }
}

export default Breadcrumb

