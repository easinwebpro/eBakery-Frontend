import { Image, Text } from '@mantine/core';
import { categoryStyles } from './Category.style.js';

export const Category = ({ category }) => {
	const { name } = category;
	const { classes } = categoryStyles();

	return (
		<div className={classes?.wrapper}>
			<Image
				width={70}
				height={70}
				radius='md'
				src={
					'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80'
				}
				alt={name + ' image'}
				withPlaceholder
			/>
			<Text size='md' color='dimmed' className={classes?.text}>
				{name}
			</Text>
		</div>
	);
};
