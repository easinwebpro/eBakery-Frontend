import { Categories } from 'components/Categories';
import Layout from 'components/Layout/Layout';
import { Services } from 'components/Services';
import { Welcome } from 'components/Welcome/Welcome';

export default function HomePage() {
	return (
		<>
			<Layout>
				<Categories />
				<Welcome />
				<Services />
			</Layout>
		</>
	);
}
