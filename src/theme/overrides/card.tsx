// ** Type Import
import { OwnerStateThemeType } from '.'

const Card = (skin: string) => {
  return {
    MuiCard: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          ...(skin === 'bordered'
            ? {
                border: `1px solid ${theme.palette.divider}`
              }
            : {
                boxShadow: theme.shadows[skin === 'default' ? 0 : 4]
              })
        })
      }
    }
  }
}

export default Card

