// ** Type Import
import { OwnerStateThemeType } from '.'

const List = () => {
  return {
    MuiList: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          padding: `${theme.spacing(1.25, 0)}`
        })
      }
    }
  }
}

export default List

