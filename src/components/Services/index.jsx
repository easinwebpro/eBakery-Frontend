import { SimpleGrid } from '@mantine/core';
import { Service } from './Service';

const servicesData = [
	{
		title: 'Best prices & offers',
		subTitle: 'Orders $50 or more',
		image: 'https://nest-nextjs.vercel.app/assets/imgs/theme/icons/icon-1.svg',
	},
	{
		title: 'Free delivery',
		subTitle: '24/7 amazing service',
		image: 'https://nest-nextjs.vercel.app/assets/imgs/theme/icons/icon-2.svg',
	},
	{
		title: 'Great daily deal',
		subTitle: 'When you sign up',
		image: 'https://nest-nextjs.vercel.app/assets/imgs/theme/icons/icon-3.svg',
	},
	{
		title: 'Wide assortment',
		subTitle: 'Mega Discounts',
		image: 'https://nest-nextjs.vercel.app/assets/imgs/theme/icons/icon-4.svg',
	},
	{
		title: 'Easy returns',
		subTitle: 'Within 30 days',
		image: 'https://nest-nextjs.vercel.app/assets/imgs/theme/icons/icon-5.svg',
	},
];

export const Services = () => {
	return (
		<SimpleGrid
			cols={5}
			spacing='md'
			sx={{
				margin: '20px 0',
			}}
		>
			{servicesData.map((item) => (
				<Service
					key={item.title}
					title={item.title}
					subTitle={item.subTitle}
					image={item.image}
				/>
			))}
		</SimpleGrid>
	);
};
