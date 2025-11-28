// ** Type Import
import { OwnerStateThemeType } from '.'

const Timeline = () => {
  return {
    MuiTimeline: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          padding: 0,
          margin: 0
        })
      }
    }
  }
}

export default Timeline

