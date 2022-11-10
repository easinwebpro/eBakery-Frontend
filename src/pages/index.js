import { Categories } from 'components/Categories';
import { HeroSection } from 'components/HeroSection';
import Layout from 'components/Layout/Layout';
import { Services } from 'components/Services';
import { Welcome } from 'components/Welcome/Welcome';

export default function HomePage() {
	return (
		<>
			<Layout>
				<HeroSection />
				<Categories />
				<Welcome />
				<Services />
			</Layout>
		</>
	);
}
