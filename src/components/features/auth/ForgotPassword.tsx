import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from '@mui/material'

interface ForgotPasswordProps {
  open: boolean
  handleClose: () => void
}

const ForgotPassword = ({ open, handleClose }: ForgotPasswordProps) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Quên mật khẩu</DialogTitle>
      <DialogContent>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Nhập email của bạn và chúng tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu.
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="forgot-email"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Hủy</Button>
        <Button onClick={handleClose} variant="contained">
          Gửi
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ForgotPassword

