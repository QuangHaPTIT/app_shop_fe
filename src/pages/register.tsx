import { NextPage } from "next";
import RegisterForm from "src/components/features/auth/RegisterForm";
import AuthLayout from "src/components/layout/AuthLayout";

const Register: NextPage = () => {
    return (
        <AuthLayout title="Đăng ký">
            <RegisterForm />
        </AuthLayout>
    )
}

export default Register;