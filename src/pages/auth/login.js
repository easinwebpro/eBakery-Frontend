import { UnAuthenticated } from 'components/ProtectedRoute';
import Layout from 'components/Layout/Layout';
import { Login as LoginX } from 'components/auth/Login';

const Login = () => {
    return (
        <>
            <Layout>
                <UnAuthenticated>
                    <LoginX />
                </UnAuthenticated>
            </Layout>
        </>
    );
};

export default Login;

