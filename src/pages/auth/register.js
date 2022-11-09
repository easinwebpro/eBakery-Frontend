import { Categories } from 'components/Categories';
import Layout from 'components/Layout/Layout';
import { HeroSection } from 'components/HeroSection';
import { Services } from 'components/Services';
import { Welcome } from 'components/Welcome/Welcome';
import { Register } from 'components/auth/Register';
import { UnAuthenticated } from 'components/ProtectedRoute';

const register = () => {
    return (
        <>
            <Layout>
            <UnAuthenticated>
                <Register />
            </UnAuthenticated>
            </Layout>
        </>
    );
};

export default register;

