import { Image, Text } from '@mantine/core';
import Link from 'next/link.js';
import { categoryStyles } from './Category.style.js';

export const Category = ({ category }) => {
	const { classes } = categoryStyles();

	return (
		<div className={classes.wrapper}>

			<Link href={`/category/${category.slug}`} passHref>
				<a style={{ textDecoration: 'none' }}>
					<Image
						width={70}
						height={70}
						radius='md'
						src={category?.category_image}
						
						withPlaceholder
					/>
					<Text size='md' weight={500} className={classes?.text}>
						{category?.name}
					</Text>
				</a>
			</Link>

		</div>
	);
};
