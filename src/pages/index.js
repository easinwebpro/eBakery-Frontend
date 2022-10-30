import { Categories } from 'components/Categories';
import Layout from 'components/Layout/Layout';
import { NavBar } from 'components/Layout/NavBar';
import { HeroSection } from 'components/HeroSection';
import { Services } from 'components/Services';
import { Welcome } from 'components/Welcome/Welcome';

export default function HomePage() {
	return (
		<>
			<NavBar />
			<Layout>
				<HeroSection/>
				<Categories />
				<Welcome />
				<Services />
			</Layout>
		</>
	);
}
