// ** Type Import
import { OwnerStateThemeType } from '.'

const Alerts = () => {
  return {
    MuiAlert: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          borderRadius: 8,
          '& .MuiAlertTitle': {
            marginBottom: theme.spacing(1)
          },
          '& a': {
            color: 'inherit',
            fontWeight: 500
          }
        }),
        standardSuccess: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.success.main,
          backgroundColor: theme.palette.success.light,
          '& .MuiAlert-icon': {
            color: theme.palette.success.main
          }
        }),
        standardError: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.error.main,
          backgroundColor: theme.palette.error.light,
          '& .MuiAlert-icon': {
            color: theme.palette.error.main
          }
        }),
        standardWarning: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.warning.main,
          backgroundColor: theme.palette.warning.light,
          '& .MuiAlert-icon': {
            color: theme.palette.warning.main
          }
        }),
        standardInfo: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.info.main,
          backgroundColor: theme.palette.info.light,
          '& .MuiAlert-icon': {
            color: theme.palette.info.main
          }
        })
      }
    }
  }
}

export default Alerts

