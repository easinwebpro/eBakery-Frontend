import { Carousel } from '@mantine/carousel';
import { StaticFeatureCard } from './StaticFeatureCard';

import { staticFeatureData } from 'static/staticFeature';

export const StaticFeature = () => {
	return (

		<Carousel
			withControls={false}
			slideSize='100px'
			align='start'
			slideGap="xl"
			controlSize={staticFeatureData?.length}
			loop
			dragFree
		>
			{
				staticFeatureData.map((item , ind) => (
					<Carousel.Slide key={ind}>
						<StaticFeatureCard
							key={item.title}
							title={item.title}
							subTitle={item.subTitle}
							image={item.image}
						/>
					</Carousel.Slide>
				))
			}
		</Carousel>

	);
};
