import { Categories } from 'components/Categories';
import Layout from 'components/Layout/Layout';
import { Register } from 'components/auth/Register';
import { UnAuthenticated } from 'components/ProtectedRoute';

const register = () => {
    return (
        <>
            <Layout footerTopStatic={false}>
                <UnAuthenticated>
                    <Register />
                </UnAuthenticated>
            </Layout>
        </>
    );
};

export default register;

