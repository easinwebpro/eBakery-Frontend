import React from 'react';

import { Card, Image, Text, Badge, Button, Group, Title, InputBase, Divider } from '@mantine/core';
import { IconChecks } from '@tabler/icons';
import Link from 'next/link';

export const Product_Checkout = () => {
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder px="md" py="md">
            <Title order={4} weight={700}>CART TOTALS</Title>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Subtotal:</Text>
                <Badge color="pink" variant="light">
                    2,025.00৳
                </Badge>
            </Group>
            <Divider my="sm" variant="dashed" />
            <Group position="apart" mt="lg" mb="lg">
                <Text weight={500}>Shipping:</Text>
                <InputBase radius="md" size="xs" component="select" onChange={(e) => console.log(e.target.value)}

                    styles={{
                        select: {
                            label: {
                                fontWeight: '700 !important',
                                color: 'red'
                            }
                        },
                    }}
                >
                    <option value="60" style={{ fontWeight: 700 }} > InSide of Dhaka </option>
                    <option value="150" style={{ fontWeight: 700 }} > OutSide of Dhaka </option>
                </InputBase>
            </Group>

            <Divider my="sm" variant="dashed" />
            <Link href='/checkout' passHref>
                <Button leftIcon={<IconChecks size={20} />} fullWidth variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} radius='lg' mt="md">
                    PROCEED TO CHECKOUT
                </Button>
            </Link>

        </Card>
    );
};