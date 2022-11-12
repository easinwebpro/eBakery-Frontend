import {
	Box,
	Button,
	Group,
	Modal,
	Paper,
	Text,
	Textarea,
	TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRef, useState } from 'react';
import { shippingStyles } from './Shipping.style';

const addressesInit = [
	{
		title: 'Home',
		address: '27 Street, 2569 Heritage Road Visalia, CA 93291',
	},
	{
		title: 'Home2',
		address: '27 Street, 2569 Heritage Road Visalia, CA 93291',
	},
];

export const Shipping = () => {
	const [addresses, setAddresses] = useState(addressesInit);
	const [opened, setOpened] = useState(false);
	const [updateModal, setUpdateModal] = useState(false);

	// for update address id
	let UpdateIdRef = useRef('');

	const { classes } = shippingStyles();

	const form = useForm({
		initialValues: {
			title: '',
			address: '',
		},

		validate: {
			title: (value) => (value !== '' ? null : 'Input your address name'),
			address: (value) =>
				value !== '' ? null : 'Input your address name',
		},
	});

	// Add address in addresses
	const handleAddAddress = (value) => {
		setAddresses([...addresses, value]);
		setOpened(false);
		form.reset();
	};

	// Delete address in addresses
	const handleDeleteAddress = (index) => {
		addresses.splice(index, 1);
		setAddresses([...addresses]);
	};

	// Update address in addresses
	const handleUpdateAddress = (index) => {
		UpdateIdRef.current = index;
		setUpdateModal(true);
		form.values.title = addresses[index].title;
		form.values.address = addresses[index].address;
		setOpened(true);
	};

	const handleUpdateAddresses = () => {
		addresses[UpdateIdRef.current].title = form.values.title;
		addresses[UpdateIdRef.current].address = form.values.address;
		setAddresses([...addresses]);
		modalClose();
	};

	const modalClose = () => {
		setOpened(false);
		form.values.title = '';
		form.values.address = '';
		setUpdateModal(false);
	};

	return (
		<div className={classes.wrapper}>
			<Paper withBorder p='lg' radius='md' shadow='md'>
				<Group position='apart' mb='xs'>
					<Text size='28px' weight={600}>
						Shipping Address
					</Text>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='icon icon-tabler icon-tabler-plus'
						width='26'
						height='26'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='#9e9e9e'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
						style={{ cursor: 'pointer' }}
						onClick={() => setOpened(true)}
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<line x1='12' y1='5' x2='12' y2='19' />
						<line x1='5' y1='12' x2='19' y2='12' />
					</svg>
				</Group>
				<Box className={classes.addresses}>
					{addresses.map((item, index) => (
						<Box key={item.title} className={classes.addressBox}>
							<Group position='apart'>
								<Text className={classes.title}>
									{item.title}
								</Text>
								<Group className={classes.addressActionBtn}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='icon icon-tabler icon-tabler-pencil'
										width='16'
										height='16'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='#00b341'
										fill='none'
										strokeLinecap='round'
										strokeLinejoin='round'
										style={{ cursor: 'pointer' }}
										onClick={() =>
											handleUpdateAddress(index)
										}
									>
										<path
											stroke='none'
											d='M0 0h24v24H0z'
											fill='none'
										/>
										<path d='M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4' />
										<line
											x1='13.5'
											y1='6.5'
											x2='17.5'
											y2='10.5'
										/>
									</svg>

									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='icon icon-tabler icon-tabler-trash'
										width='16'
										height='16'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='#ff2825'
										fill='none'
										strokeLinecap='round'
										strokeLinejoin='round'
										style={{ cursor: 'pointer' }}
										onClick={() =>
											handleDeleteAddress(index)
										}
									>
										<path
											stroke='none'
											d='M0 0h24v24H0z'
											fill='none'
										/>
										<line x1='4' y1='7' x2='20' y2='7' />
										<line x1='10' y1='11' x2='10' y2='17' />
										<line x1='14' y1='11' x2='14' y2='17' />
										<path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
										<path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
									</svg>
								</Group>
							</Group>

							<Text className={classes.address}>
								{item.address}
							</Text>
						</Box>
					))}
				</Box>
			</Paper>

			<Modal
				centered
				opened={opened}
				onClose={() => modalClose()}
				title='Add new address'
			>
				<form
					onSubmit={form.onSubmit((values) =>
						handleAddAddress(values)
					)}
				>
					<TextInput
						withAsterisk
						label='Name'
						placeholder='Home / Office'
						{...form.getInputProps('title')}
						value={form.values.title}
					/>
					<Textarea
						withAsterisk
						label='Address'
						placeholder='Enter your address'
						{...form.getInputProps('address')}
						value={form.values.address}
						mt='sm'
					/>

					<Group position='right' mt='md'>
						{updateModal ? (
							<Button
								onClick={() => handleUpdateAddresses()}
								color='lime'
							>
								Update
							</Button>
						) : (
							<Button type='submit' color='lime'>
								Submit
							</Button>
						)}
					</Group>
				</form>
			</Modal>
		</div>
	);
};
