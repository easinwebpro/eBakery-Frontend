import { NavBar } from 'components/Layout/NavBar';
import { Welcome } from 'components/Welcome/Welcome';
import { ColorSchemeToggle } from 'components/ColorSchemeToggle/ColorSchemeToggle';
import Layout from 'components/Layout/Layout';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Layout>
        <Welcome />
      </Layout>
    </>
  );
}
