// ** Type Import
import { OwnerStateThemeType } from '.'

const DataGrid = () => {
  return {
    MuiDataGrid: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          border: 0,
          color: theme.palette.text.primary,
          '& .MuiDataGrid-columnHeaders': {
            textTransform: 'uppercase',
            '& .MuiDataGrid-columnHeader': {
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.5px'
            }
          }
        })
      }
    }
  }
}

export default DataGrid

