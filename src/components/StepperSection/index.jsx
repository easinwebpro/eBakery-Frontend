import { Button, Group, Stepper } from '@mantine/core';
import { Login } from 'components/auth/Login';
import { useState } from 'react';

export const StepperSection = () => {
	const [active, setActive] = useState(0);

	const nextStep = () =>
		setActive((current) => (current < 3 ? current + 1 : current));

	const prevStep = () =>
		setActive((current) => (current > 0 ? current - 1 : current));

	return (
		<>
			<Stepper
				color='lime'
				active={active}
				onStepClick={setActive}
				breakpoint='sm'
			>
				<Stepper.Step
					label='First step'
					description='Login your account'
					allowStepSelect={active > 0}
				>
					<Login />
				</Stepper.Step>
				<Stepper.Step
					label='Second step'
					description='Shipping address'
					allowStepSelect={active > 1}
				>
					Step 2 content: Verify email
				</Stepper.Step>
				<Stepper.Step
					label='Final step'
					description='Payment'
					allowStepSelect={active > 2}
				>
					Step 3 content: Get full access
				</Stepper.Step>
				<Stepper.Completed>
					Completed, click back button to get to previous step
				</Stepper.Completed>
			</Stepper>

			<Group position='center' mt='xl'>
				<Button variant='default' onClick={prevStep}>
					Back
				</Button>
				<Button color='lime' onClick={nextStep}>
					Next step
				</Button>
			</Group>
		</>
	);
};
