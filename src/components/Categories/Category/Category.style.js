import { createStyles } from '@mantine/core';

export const categoryStyles = createStyles((theme) => ({
	wrapper: {
		backgroundColor:
			theme.colorScheme === 'dark'
				? theme.colors.gray[9]
				: theme.colors.gray[1],
		padding: '12px 15px',
		width: '100px',
		height: '120px',
		borderRadius: '7px',
		textAlign: 'center',
	},
	text: {
		marginTop: '5px',
		color:
			theme.colorScheme === 'light'
				? theme.colors.gray[6]
				: theme.colors.gray[0],
	},
}));
