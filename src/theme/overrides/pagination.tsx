// ** Type Import
import { OwnerStateThemeType } from '.'

const Pagination = () => {
  return {
    MuiPagination: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '& .MuiPaginationItem-root': {
            fontSize: '0.875rem',
            '&.Mui-selected': {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark
              }
            }
          }
        })
      }
    }
  }
}

export default Pagination

