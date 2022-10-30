import { Categories } from 'components/Categories';
import Layout from 'components/Layout/Layout';
import { NavBar } from 'components/Layout/NavBar';
import { Welcome } from 'components/Welcome/Welcome';

export default function HomePage() {
	return (
		<>
			<NavBar />
			<Layout>
				<Categories />
				<Welcome />
				<Services />
			</Layout>
		</>
	);
}
