import { NextPage } from "next";
import LoginForm from "src/components/features/auth/LoginForm";
import AuthLayout from "src/components/layout/AuthLayout";

const Login: NextPage = () => {
    return (
        <AuthLayout title="Đăng nhập">
            <LoginForm />
        </AuthLayout>
    )
}

export default Login;