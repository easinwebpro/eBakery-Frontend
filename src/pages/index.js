import { Categories } from 'components/Categories';
import Layout from 'components/Layout/Layout';
import { HeroSection } from 'components/HeroSection';
import { Services } from 'components/Services';
import { Welcome } from 'components/Welcome/Welcome';

export default function HomePage() {
	return (
		<>
			<Layout>
				<HeroSection/>
				<Categories />
				<Welcome />
				<Services />
			</Layout>
		</>
	);
}
