import React from 'react';
import { TextInput, PasswordInput, Anchor, Paper, Title, Text, Container, Group, Button } from '@mantine/core';
import Link from 'next/link';
import { IconLock , IconAt , IconMail } from '@tabler/icons';

export const Register = () => {
    return (
        <div>
            <Container size={420} my={40}>
                <Title
                    align="center"
                    sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
                >
                    eBakery Shop
                </Title>
                <Text color="dimmed" size="sm" align="center" mt={5}>
                    Do have account yet please login?{' '}
                    <Link href='/auth/sigin' passHref>
                        <Anchor component="a">
                            Login
                        </Anchor>
                    </Link>

                </Text>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput icon={<IconMail size={16} />} label="Email" placeholder="you@mantine.dev" required />
                    <TextInput icon={<IconAt size={16} />} label="UserName" placeholder="easinwebpro" required />
                    <PasswordInput label="Password" placeholder="Your password" required  icon={<IconLock size={16} />} />

                    <Button fullWidth mt="xl" radius="md" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
                        Sign Up
                    </Button>
                </Paper>
            </Container >
        </div>
    )
};
