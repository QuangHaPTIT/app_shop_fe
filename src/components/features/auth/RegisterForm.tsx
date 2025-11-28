'use client'
import { useState, FormEvent } from 'react'
import {
    Box,
    Button,
    Card,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from '@mui/material'
import { SitemarkIcon } from 'src/components/icons/SitemarkIcon'
import EyeIcon from 'src/components/icons/EyeIcon'
import EyeOffIcon from 'src/components/icons/EyeOffIcon'
import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { EMAIL_REG } from 'src/configs/regex'

const registerSchema = yup.object({
    email: yup
        .string()
        .required('Email là bắt buộc')
        .email('Email không hợp lệ')
        .matches(EMAIL_REG, 'Email không hợp lệ'),
    password: yup
        .string()
        .required('Mật khẩu là bắt buộc')
        .min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
    passwordConfirm: yup
        .string()
        .required('Nhập lại mật khẩu là bắt buộc')
        .oneOf([yup.ref('password')], 'Mật khẩu không khớp'),
})

type RegisterFormData = yup.InferType<typeof registerSchema>

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

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)

    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterFormData>({
        resolver: yupResolver(registerSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
            passwordConfirm: '',
        }
    })

    const onSubmit = async (data: RegisterFormData) => {
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
                    Đăng ký
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

                    <FormControl>
                        <FormLabel htmlFor="passwordConfirm">Nhập lại mật khẩu</FormLabel>
                        <Controller
                            name="passwordConfirm"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    error={!!errors.passwordConfirm}
                                    helperText={errors.passwordConfirm?.message}
                                    placeholder="••••••"
                                    type={showPasswordConfirm ? 'text' : 'password'}
                                    id="passwordConfirm"
                                    autoComplete="new-password"
                                    required
                                    fullWidth
                                    variant="outlined"
                                    color={errors.passwordConfirm ? 'error' : 'primary'}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                                                    edge="end"
                                                >
                                                    {showPasswordConfirm ? <EyeOffIcon /> : <EyeIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />
                    </FormControl>


                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 4, py: 4 }}
                    >
                        Đăng ký
                    </Button>


                    <Typography sx={{ textAlign: 'center' }}>
                        Bạn đã có tài khoản?{' '}
                        <Link
                            href="/login"
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
                                Đăng nhập
                            </Typography>
                        </Link>
                    </Typography>
                </Box>
            </Card>
        </SignInContainer>
    )
}

export default RegisterForm
