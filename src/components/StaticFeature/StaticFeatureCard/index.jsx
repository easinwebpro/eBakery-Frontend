import { Group, Image, Text } from '@mantine/core';
import { serviceStyles } from './Service.style';

export const StaticFeatureCard = ({ title, subTitle, image }) => {
	const { classes } = serviceStyles();

	return (
		<div className={classes.wrapper}>
			<Group>
				<Image src={image} width={40} />
				<div>
					<Text className={classes.title}>{title}</Text>
					<Text className={classes.subTitle}>{subTitle}</Text>
				</div>
			</Group>
		</div>
	);
};
