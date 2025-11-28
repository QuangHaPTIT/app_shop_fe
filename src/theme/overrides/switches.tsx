// ** Type Import
import { OwnerStateThemeType } from '.'

const Switches = () => {
  return {
    MuiSwitch: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          width: 54,
          height: 38,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
              transform: 'translateX(16px)',
              '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
                opacity: 1,
                border: 0
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5
              }
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
              color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600]
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
            }
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 14,
            height: 14
          },
          '& .MuiSwitch-track': {
            borderRadius: 38 / 2,
            backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
              duration: 500
            })
          }
        })
      }
    }
  }
}

export default Switches

