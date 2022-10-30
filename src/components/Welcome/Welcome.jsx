import { Anchor, Grid, Text, Title } from '@mantine/core';
import { ProductCard } from '../Product/ProductCard';
import useStyles from './Welcome.styles';

export function Welcome() {
	const { classes } = useStyles();

	return (
		<>
			<Title className={classes.title} align='center' mt={100}>
				Welcome to{' '}
				<Text inherit variant='gradient' component='span'>
					Mantine
				</Text>
			</Title>
			<Text
				color='dimmed'
				align='center'
				size='lg'
				sx={{ maxWidth: 580 }}
				mx='auto'
				mt='xl'
			>
				This starter Next.js project includes a minimal setup for server
				side rendering, if you want to learn more on Mantine + Next.js
				integration follow{' '}
				<Anchor href='https://mantine.dev/guides/next/' size='lg'>
					this guide
				</Anchor>
				. To get started edit index.tsx file.
			</Text>

			<Grid sx={{ marginBottom: 20 }}>
				<Grid.Col md={4} lg={3}>
					{' '}
					<ProductCard />{' '}
				</Grid.Col>
				<Grid.Col md={4} lg={3}>
					{' '}
					<ProductCard />
				</Grid.Col>
				<Grid.Col md={4} lg={3}>
					{' '}
					<ProductCard />
				</Grid.Col>
				<Grid.Col md={4} lg={3}>
					{' '}
					<ProductCard />
				</Grid.Col>
			</Grid>
		</>
	);
}
