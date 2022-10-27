import { createStyles } from '@mantine/core';

export const categoryStyles = createStyles((theme) => ({
	wrapper: {
		backgroundColor: theme.colors.gray[1],
		padding: '12px 15px',
		width: '100px',
		height: '120px',
		borderRadius: '7px',
		textAlign: 'center',
	},
	text: {
		marginTop: '5px',
	},
}));
