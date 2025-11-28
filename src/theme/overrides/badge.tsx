// ** Type Import
import { OwnerStateThemeType } from '.'

const Badge = {
  MuiBadge: {
    styleOverrides: {
      root: ({ theme }: OwnerStateThemeType) => ({
        '& .MuiBadge-badge': {
          fontWeight: 500,
          height: 18,
          minWidth: 18
        }
      })
    }
  }
}

export default Badge

