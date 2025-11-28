import Head from "next/head";
import { ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode
    title?: string
}

const AuthLayout = ({ children, title = 'Authentication'}: AuthLayoutProps) => {
    return (
        <>
          <Head>
            <title>{title}</title>
          </Head>
          {children}
        </>
      )
}

export default AuthLayout