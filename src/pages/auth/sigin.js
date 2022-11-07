import { Categories } from 'components/Categories';
import Layout from 'components/Layout/Layout';
import { HeroSection } from 'components/HeroSection';
import { Services } from 'components/Services';
import { Welcome } from 'components/Welcome/Welcome';
import { Login } from 'components/auth/Login';

const Sigin = () => {
    return (
        <>
            <Layout>
                <Login/>
            </Layout>
        </>
    );
};

export default Sigin;

