import { createStyles } from '@mantine/core';

export const HeroItemStyles = createStyles((theme) => ({
	wrapper: {
		height: '500px',
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing.xl * 2,
		borderRadius: theme.radius.md,
		backgroundPosition: 'cover',
		backgroundSize: '100%',
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
		border: `1px solid ${
			theme.colorScheme === 'dark'
				? theme.colors.dark[8]
				: theme.colors.gray[3]
		}`,
	},
	body: {
		paddingRight: theme.spacing.xl * 4,
	},

	title: {
		fontSize: '64px',
		color: theme.colorScheme === 'dark' ? theme.black : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1,
		marginBottom: theme.spacing.md,
	},
	subTitle: {
		marginTop: '48px',
		fontSize: '32px',
		color:
			theme.colorScheme === 'dark'
				? theme.colors.gray[6]
				: theme.colors.gray[6],
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1,
		marginBottom: theme.spacing.md,
	},

	controls: {
		display: 'flex',
		marginTop: theme.spacing.xl,
	},

	inputWrapper: {
		width: '100%',
		flex: '1',
	},

	input: {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderRight: 0,
		'&:focus': {
			borderColor:
				theme.colorScheme === 'dark'
					? theme.black
					: theme.colors.green[5],
		},
	},

	control: {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		backgroundColor: theme.colors.green[5],
		'&:hover': {
			backgroundColor: theme.colors.green[6],
		},
	},
}));
