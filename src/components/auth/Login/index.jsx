import React from 'react';
import { TextInput, PasswordInput, Checkbox, Anchor, Paper, Title, Text, Container, Group, Button } from '@mantine/core';
import Link from 'next/link';
import { IconLock, IconMail } from '@tabler/icons';

export const Login = () => {
    return (
        <div>
            <Container size={420} my={40}>
                <Title
                    align="center"
                    sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
                >
                    Welcome back!
                </Title>
                <Text color="dimmed" size="sm" align="center" mt={5}>
                    Do not have an account yet?{' '}
                    <Link href='/auth/register' passHref>
                        <Anchor component="a">
                            Create account
                        </Anchor>
                    </Link>

                </Text>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput label="Email" placeholder="you@mantine.dev" required icon={<IconMail size={16} />} />
                    <PasswordInput label="Password" placeholder="Your password" required mt="md" icon={<IconLock size={16} />} />
                    <Group position="apart" mt="md">
                        <Checkbox label="Remember me" />
                        <Anchor onClick={(event) => event.preventDefault()} size="sm">
                            Forgot password?
                        </Anchor>
                    </Group>
                    <Button fullWidth mt="xl" radius="md" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} loading >
                        Sign in
                    </Button>
                </Paper>
            </Container >
        </div >
    )
};
