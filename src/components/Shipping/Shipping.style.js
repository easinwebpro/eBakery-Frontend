import { createStyles } from '@mantine/core';

export const shippingStyles = createStyles((theme) => ({
	wrapper: {
		width: '650px',
		height: 'auto',
		margin: '30px auto',
	},
	addresses: {
		padding: '10px 0',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		gap: '10px',
	},
	addressBox: {
		padding: '10px',
		backgroundColor:
			theme.colorScheme === 'light'
				? theme.colors.gray[1]
				: theme.colors.gray[9],
		border: `${
			theme.colorScheme === 'light'
				? theme.colors.gray[1]
				: theme.colors.gray[9]
		} 1px solid`,
		borderRadius: '5px',
		transition: '0.3s all',

		'&:hover': {
			border: `${theme.colors.lime[6]} 1px solid`,
		},
		// '&:hover $addressActionBtn': {
		// 	visibility: 'visible',
		// },
	},
	// addressActionBtn: {
	// 	visibility: 'hidden',
	// },
	title: {
		fontWeight: '600',
	},
	address: {
		marginTop: '8px',
	},
}));
