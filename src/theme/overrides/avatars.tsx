// ** Type Import
import { OwnerStateThemeType } from '.'

const Avatar = () => {
  return {
    MuiAvatar: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          fontSize: '0.875rem',
          fontWeight: 500
        }),
        colorDefault: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[700]
        })
      }
    }
  }
}

export default Avatar

