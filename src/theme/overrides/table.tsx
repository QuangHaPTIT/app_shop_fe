// ** Type Import
import { OwnerStateThemeType } from '.'

const Table = () => {
  return {
    MuiTableContainer: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: theme.shadows[0],
          borderTopColor: theme.palette.divider
        })
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          textTransform: 'uppercase',
          '& .MuiTableCell-head': {
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            color: theme.palette.text.secondary
          }
        })
      }
    },
    MuiTableBody: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '& .MuiTableCell-body': {
            letterSpacing: '0.25px',
            color: theme.palette.text.primary
          }
        })
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '&:last-of-type .MuiTableCell-root': {
            borderBottom: `1px solid ${theme.palette.divider}`
          },
          '& .MuiTableCell-root': {
            '&:last-of-type': {
              paddingRight: theme.spacing(4)
            },
            '&:first-of-type': {
              paddingLeft: theme.spacing(4)
            }
          }
        })
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          borderBottom: `1px solid ${theme.palette.divider}`,
          '&:last-of-type': {
            paddingRight: theme.spacing(4)
          },
          '&:first-of-type': {
            paddingLeft: theme.spacing(4)
          }
        })
      }
    }
  }
}

export default Table

