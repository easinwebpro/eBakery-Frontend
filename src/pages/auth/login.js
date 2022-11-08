import { Categories } from 'components/Categories';
import Layout from 'components/Layout/Layout';
import { HeroSection } from 'components/HeroSection';
import { Services } from 'components/Services';
import { Welcome } from 'components/Welcome/Welcome';
import { Login as LoginX } from 'components/auth/Login';

const Login = () => {
    return (
        <>
            <Layout>
                <LoginX />
            </Layout>
        </>
    );
};

export default Login;

