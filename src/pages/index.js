import { Categories } from 'components/Categories';
import Layout from 'components/Layout/Layout';
import { Welcome } from 'components/Welcome/Welcome';

export default function HomePage() {
	return (
		<>
			<Layout>
				<Categories />
				<Welcome />
			</Layout>
		</>
	);
}
