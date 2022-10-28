import { Carousel } from '@mantine/carousel';
import { Category } from 'components/Category';

// Fake data for categories
import categoryItems from './categoriesFakeData.js';

export const Categories = () => {
	return (
		<Carousel
			slideSize='100px'
			height={120}
			align='start'
			slideGap='sm'
			controlSize={categoryItems.length}
			dragFree
		>
			{categoryItems.map((category) => (
				<Carousel.Slide key={category.name}>
					<Category category={category} />
				</Carousel.Slide>
			))}
		</Carousel>
	);
};
