import { IconButton, Tooltip, Box } from '@mui/material'
import { useSettings } from 'src/hooks/useSettings'
import MoonIcon from 'src/components/icons/MoonIcon'
import SunIcon from 'src/components/icons/SunIcon'

interface ColorModeSelectProps {
  sx?: any
}

const ColorModeSelect = ({ sx }: ColorModeSelectProps) => {
  const { settings, saveSettings } = useSettings()

  const toggleColorMode = () => {
    const newMode = settings.mode === 'light' ? 'dark' : 'light'
    saveSettings({ ...settings, mode: newMode })
  }

  return (
    <Box sx={sx}>
      <Tooltip title={settings.mode === 'light' ? 'Chuyển sang chế độ tối' : 'Chuyển sang chế độ sáng'}>
        <IconButton onClick={toggleColorMode} color="inherit">
          {settings.mode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default ColorModeSelect

