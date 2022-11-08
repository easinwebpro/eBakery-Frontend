import { Categories } from 'components/Categories';
import Layout from 'components/Layout/Layout';
import { HeroSection } from 'components/HeroSection';
import { Services } from 'components/Services';
import { Welcome } from 'components/Welcome/Welcome';
import { Register } from 'components/auth/Register';

const register = () => {
    return (
        <>
            <Layout>
                <Register />
            </Layout>
        </>
    );
};

export default register;
