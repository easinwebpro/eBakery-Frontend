import React from 'react';
import { Header, Container, Avatar, Group, Button, Menu, SimpleGrid, Divider, Box, Collapse } from '@mantine/core';

// icon lib
import { IconUserPlus, IconAssembly, IconCategory } from '@tabler/icons';

//${scroll === true ? classes.smart_scroll : classes.scrolled_up}

import { useStyles } from './BottomNav.style';
import { useStickNav } from 'hooks/useStickNav';

export const BottomNav = () => {

    const scroll = useStickNav();
    const { classes, theme } = useStyles();

    return (
        <div>
            <Box pb={20}>

                <Header height={50} px="md" className={`${classes.hiddenMobile} ${scroll === true ? classes.smart_scroll : classes.scrolled_up}`}>
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
                                    <a href="#" className={classes.link}>
                                        Home
                                    </a>
                                    <a href="#" className={classes.link}>
                                        Shop
                                    </a>
                                    <a href="#" className={classes.link}>
                                        About
                                    </a>
                                    <a href="#" className={classes.link}>
                                        Offer
                                    </a>
                                    <a href="#" className={classes.link}>
                                        Contact
                                    </a>
                                </Group>
                            </div>

                            <div className={` ${classes.calltoaction} `}>

                                <div style={{ marginRight: '20px', }}>
                                    {/* <ColorSchemeToggle /> */}
                                </div>

                            </div>

                        </div>
                    </Container>
                </Header>

            </Box >
        </div>
    )
}

