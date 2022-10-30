import { createStyles } from '@mantine/core';

export const serviceStyles = createStyles((theme) => ({
	wrapper: {
		backgroundColor:
			theme.colorScheme === 'light'
				? theme.colors.gray[1]
				: theme.colors.gray[9],
		padding: '15px 10px',
		borderRadius: '5px',
	},
	title: {
		fontWeight: '600',
		color:
			theme.colorScheme === 'light'
				? theme.colors.gray[9]
				: theme.colors.gray[0],
	},
	subTitle: {
		fontWeight: '400',
		color:
			theme.colorScheme === 'light'
				? theme.colors.gray[6]
				: theme.colors.gray[6],
	},
}));
