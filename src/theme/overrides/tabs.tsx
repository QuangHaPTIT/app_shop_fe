// ** Type Import
import { OwnerStateThemeType } from '.'

const Tabs = () => {
  return {
    MuiTabs: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          minHeight: 38,
          '& .MuiTabs-indicator': {
            display: 'none'
          }
        })
      }
    }
  }
}

export default Tabs

