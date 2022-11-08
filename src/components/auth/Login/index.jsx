import React from 'react';
import { TextInput, PasswordInput, Checkbox, Anchor, Paper, Title, Text, Container, Group, Button } from '@mantine/core';
import Link from 'next/link';
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from '@mantine/form';
import { useSession } from "next-auth/react";
import { IconLock, IconMail } from '@tabler/icons';

export const Login = () => {

    const router = useRouter();
    const { data: session, status } = useSession();
    // console.log(session, status);

    const form = useForm({
        initialValues: {
            identifier: '',
            password: ''
        },

        validate: {
            identifier: (val) => (val.length <= 2 ? 'Please Provide Valid UserName...' : null),
            password: (val) => (val.length <= 3 ? 'Please Provide Valid Password...' : null),
        },
    });

    const loginHandler = async () => {

        try {

            const data = await signIn("credentials", {
                email: form.values?.identifier,
                password: form.values?.password,
                redirect: false,
            });

        } catch (err) {
            console.error(err.message);
        }
    }

    if (status === 'loading') {
        return <h4>Loading...</h4>
    }

    if (session?.user && status === "authenticated" && session?.jwt) {
        router.push('/');
    }

    return (

        <form onSubmit={form.onSubmit(() => loginHandler())}>
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
                    <TextInput value={form.values.identifier}
                        onChange={(event) => form.setFieldValue('identifier', event.currentTarget.value)}
                        error={form.errors.identifier && form.errors.identifier}
                        label="Email" placeholder="you@mantine.dev" required icon={<IconMail size={16} />} />
                    <PasswordInput label="Password" placeholder="Your password" required mt="md"
                        value={form.values.password}
                        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                        error={form.errors.password && form.errors.password}
                        icon={<IconLock size={16} />} />
                    <Group position="apart" mt="md">
                        <Checkbox label="Remember me" />
                        <Anchor onClick={(event) => event.preventDefault()} size="sm">
                            Forgot password?
                        </Anchor>
                    </Group>
                    <Button fullWidth mt="xl" radius="md" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} type='submit' >
                        Sign in
                    </Button>
                </Paper>
            </Container >
        </form >
    )
};
