'use client'
import { useState, FormEvent } from 'react'
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import { GoogleIcon } from 'src/components/icons/GoogleIcon'
import { FacebookIcon } from 'src/components/icons/FacebookIcon'
import { SitemarkIcon } from 'src/components/icons/SitemarkIcon'
import EyeIcon from 'src/components/icons/EyeIcon'
import EyeOffIcon from 'src/components/icons/EyeOffIcon'
import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { EMAIL_REG } from 'src/configs/regex'

const loginSchema = yup.object({
  email: yup
    .string()
    .required('Email là bắt buộc')
    .email('Email không hợp lệ')
    .matches(EMAIL_REG, 'Email không hợp lệ'),
  password: yup
    .string()
    .required('Mật khẩu là bắt buộc')
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
  remember: yup.boolean(),
})

type LoginFormData = yup.InferType<typeof loginSchema>

const SignInContainer = ({ children, ...props }: { children: React.ReactNode;[key: string]: any }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.default',
        position: 'relative',
        px: 2,
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false
    }
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      alert(JSON.stringify(data))
    } catch (error) {
      console.log("Login error: ", error)
    }
  }

  return (
    <SignInContainer direction="column" justifyContent="space-between">

      <Card
        elevation={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          width: '100%',
          maxWidth: 450,
          p: 4,
          borderRadius: 3,
        }}
      >
        <SitemarkIcon />

        <Typography
          component="h1"
          variant="h4"
          sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', textAlign: 'center' }}
        >
          Đăng nhập
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 2,
          }}
        >
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={errors.email ? 'error' : 'primary'}
                />
              )}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Mật khẩu</FormLabel>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  placeholder="••••••"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  required
                  fullWidth
                  variant="outlined"
                  color={errors.password ? 'error' : 'primary'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </FormControl>

          <Controller
            name="remember"
            control={control}
            render={({ field: { value, onChange } }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value}
                    onChange={onChange}
                    color="primary"
                  />
                }
                label="Ghi nhớ đăng nhập"
              />
            )}
          />

          {/* <ForgotPassword open={open} handleClose={handleClose} /> */}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 4, py: 4 }}
          >
            Đăng nhập
          </Button>

          <Button
            variant="text"
            onClick={() => {/* TODO: handle forgot password */ }}
            sx={{ alignSelf: 'center', textTransform: 'none' }}
          >
            Quên mật khẩu?
          </Button>
        </Box>

        <Divider>hoặc</Divider>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => alert('Sign in with Google')}
            startIcon={<GoogleIcon />}
          >
            Đăng nhập với Google
          </Button>

          <Button
            fullWidth
            variant="outlined"
            onClick={() => alert('Sign in with Facebook')}
            startIcon={<FacebookIcon />}
          >
            Đăng nhập với Facebook
          </Button>

          <Typography sx={{ textAlign: 'center' }}>
            Chưa có tài khoản?{' '}
            <Link
              href="/register"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                fontSize: '0.875rem'
              }}
            >
              <Typography
                component="span"
                variant="body2"
                sx={{
                  color: 'primary.main',
                  cursor: 'pointer',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                Đăng ký ngay
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Card>
    </SignInContainer>
  )
}

export default LoginForm
