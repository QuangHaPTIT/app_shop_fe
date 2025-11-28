// ** Type Import
import { OwnerStateThemeType } from '.'

const Accordion = () => {
  return {
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: 'none',
          '&:before': {
            display: 'none'
          },
          '&.Mui-expanded': {
            margin: 'auto'
          },
          '&:not(:last-of-type)': {
            borderBottom: `1px solid ${theme.palette.divider}`
          }
        })
      }
    }
  }
}

export default Accordion

