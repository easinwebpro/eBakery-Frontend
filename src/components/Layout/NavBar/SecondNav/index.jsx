import React from 'react';
import { Header, Container, Text, Group, Button, Menu, SimpleGrid, Divider, Box, Collapse } from '@mantine/core';

// icon lib
import { IconUserPlus, IconAssembly, IconCategory } from '@tabler/icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useMediaQuery } from '@mantine/hooks';

import { useStyles } from './SecondNav.style';
import { useStickNav } from 'hooks/useStickNav';
import Link from 'next/link';
import { menu_item } from 'static/menu/bottom_menu';

export const SecondNav = () => {

    const scroll = useStickNav();
    const { classes, theme } = useStyles();

    const matches = useMediaQuery('(min-width: 885px)');

    return (
        <div>
            <Box pb={20}>

                <Header height={60} px="md" className={`${classes.hiddenMobile} ${scroll === true ? classes.smart_scroll : classes.scrolled_up}`}>
                    <Container size="97%">
                        <div className={classes.menu_wrapper_mbn}>
                            <div className={classes.category_wrapper}>
                                <Menu position="bottom-start" withArrow shadow="md" width={250}>
                                    <Menu.Target>
                                        <Button leftIcon={<IconCategory size={15} />} variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
                                            Browse - Categories
                                        </Button>
                                    </Menu.Target>

                                    <Menu.Dropdown>
                                        <Menu.Item icon={<IconAssembly size={20} />} >
                                            <b>Signin</b>
                                        </Menu.Item>
                                        <Menu.Item icon={<IconUserPlus size={20} />} >
                                            <b>Signup</b>
                                        </Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                            </div>

                            <div sm={{ height: '100%' }} className={`${classes.menubar_wrapper_bn} `}>
                                <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                                    {
                                        menu_item.map((item, index) => (
                                            <Link key={index} href={item?.slug} passHref>
                                                <a className={classes.link}> {item?.name} </a>
                                            </Link>
                                        ))
                                    }

                                </Group>
                            </div>

                            <div className={` ${classes.calltoaction} `}>
                                {
                                    matches && <div className={classes.support_center}>
                                        <LazyLoadImage
                                            width="35px"
                                            alt="support center"
                                            effect="blur"
                                            src="https://i.ibb.co/z81MKKV/customer-ser.png" />
                                        <div className={classes.support_center_con}>
                                            <Text className={classes.support_center_title}>
                                                01900-888-888
                                            </Text>
                                            <Text size="12px" className={classes.support_center_desc}>
                                                24/7 Support Center
                                            </Text>
                                        </div>
                                    </div>
                                }

                            </div>

                        </div>
                    </Container>
                </Header>

            </Box >
        </div>
    )
}

