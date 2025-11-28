// ** Type Import
import { OwnerStateThemeType } from '.'

const Menu = () => {
  return {
    MuiMenu: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '& .MuiPaper': {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            boxShadow: theme.palette.mode === 'light' ? theme.shadows[8] : theme.shadows[9],
            '& .MuiMenuItem-root': {
              padding: theme.spacing(2, 4),
              '&:last-of-type': {
                border: 0
              }
            }
          }
        })
      }
    }
  }
}

export default Menu

