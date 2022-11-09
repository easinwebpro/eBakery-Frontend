import React from 'react';
import { TextInput, PasswordInput, Anchor, Paper, Title, Text, Container, Group, Button } from '@mantine/core';
import Link from 'next/link';
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from '@mantine/form';
import { useSession } from "next-auth/react";
import { IconLock, IconAt, IconMail } from '@tabler/icons';

export const Register = () => {

    const form = useForm({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },

        validate: {
            username: (val) => (val.length <= 2 ? 'Please Provide Valid UserName...' : null),
            email: (val) => (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val) ? null : 'Please Provide Valid Email...'),
            password: (val) => (val.length <= 3 ? 'Please Provide Valid Password...' : null),
        },
    });

    const signUpHandler = async () => {

        try {

            const data = await signIn("credentials", {
                type: 'register',
                username: form.values?.username,
                email: form.values?.email,
                password: form.values?.password,
                redirect: false,
            });

        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <form onSubmit={form.onSubmit(() => signUpHandler())}>
            <Container size={420} my={40}>
                <Title
                    align="center"
                    sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
                >
                    eBakery Shop
                </Title>
                <Text color="dimmed" size="sm" align="center" mt={5}>
                    Do have account yet please login?{' '}
                    <Link href='/auth/login' passHref>
                        <Anchor component="a">
                            Login
                        </Anchor>
                    </Link>

                </Text>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput icon={<IconMail size={16} />} label="Email" placeholder="you@mantine.dev" required
                        value={form.values.email}
                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                        error={form.errors.email && form.errors.email} />
                    <TextInput icon={<IconAt size={16} />} label="UserName" placeholder="easinwebpro" required
                        value={form.values.username}
                        onChange={(event) => form.setFieldValue('username', event.currentTarget.value)}
                        error={form.errors.username && form.errors.username} />
                    <PasswordInput label="Password" placeholder="Your password" required icon={<IconLock size={16} />}
                        value={form.values.password}
                        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                        error={form.errors.password && form.errors.password} />

                    <Button fullWidth mt="xl" radius="md" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} type='submit'>
                        Sign Up
                    </Button>
                </Paper>
            </Container >
        </form>
    )
};
