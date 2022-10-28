import { Header, Grid, Menu, Avatar, Group, Button, UnstyledButton, Text, SimpleGrid, ThemeIcon, Anchor, Divider, Center, Box, Burger, Drawer, Collapse, ScrollArea, Container } from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import { IconNotification, IconCode, IconBook, IconChartPie3, IconFingerprint, IconCoin, IconChevronDown, IconSearch, IconUserPlus, IconAssembly } from '@tabler/icons';

import { ColorSchemeToggle } from '../../ColorSchemeToggle/ColorSchemeToggle';
import { useStyles } from './Navbar.styles';
import { SearchBar } from './Search';

const mockdata = [
    {
        icon: IconCode,
        title: 'Open source',
        description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
        icon: IconCoin,
        title: 'Free for everyone',
        description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
        icon: IconBook,
        title: 'Documentation',
        description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
        icon: IconFingerprint,
        title: 'Security',
        description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
        icon: IconChartPie3,
        title: 'Analytics',
        description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
        icon: IconNotification,
        title: 'Notifications',
        description: 'Combusken battles with the intensely hot flames it spews',
    },
];

export const NavBar = () => {

    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const { classes, theme } = useStyles();

    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group noWrap align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon size={22} color={theme.fn.primaryColor()} />
                </ThemeIcon>
                <div>
                    <Text size="sm" weight={500}>
                        {item.title}
                    </Text>
                    <Text size="xs" color="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));

    return (
        <Box>

            <Header height={60} px="md">
                <Container size="97%">
                    <div className={classes.menu_wrapper}>
                        <div className={`${classes.mobile_menu} ${classes.hiddenDesktop}`}>
                            <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
                        </div>

                        <div className={classes.logo_wrapper}>
                            <h3>Mantine UI </h3>
                        </div>

                        <div sm={{ height: '100%' }} className={`${classes.search_bar} ${classes.hiddenMobile} `}>
                            <SearchBar />
                        </div>

                        <div className={` ${classes.profile} `}>

                            <div style={{ marginRight: '20px', }}>
                                <ColorSchemeToggle />
                            </div>

                            <Menu withArrow shadow="md" width={180}>
                                <Menu.Target>
                                    <Avatar radius="xl" src="https://scontent.fcgp25-1.fna.fbcdn.net/v/t1.6435-9/186938083_2843672705892625_8187455433643123345_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHCKHRvPn79lNruhW8J-weVEdmFCowLZJUR2YUKjAtklU-XCJRN7oZH2m6O0HsChye2Kk23vjfDDX4KakuR0mli&_nc_ohc=WeRovMghYTgAX8KxpjI&_nc_ht=scontent.fcgp25-1.fna&oh=00_AfCQNnfGYBgALvfmjtdQoiJ_zQyO8RxzBFteIkl0_SRDug&oe=637F5822" alt="it's me" />
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


                    </div>
                </Container>
            </Header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="75%"
                padding="md"
                title=""
                className={classes.hiddenDesktop}
                overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={3}
                zIndex={1000000}
            >
                <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
                    {/* <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} /> */}

                    <a href="#" className={classes.link}>
                        Home
                    </a>
                    <UnstyledButton className={classes.link} onClick={toggleLinks}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                Features
                            </Box>
                            <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{links}</Collapse>
                    <a href="#" className={classes.link}>
                        Learn
                    </a>
                    <a href="#" className={classes.link}>
                        Academy
                    </a>

                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <Group position="center" grow pb="xl" px="md">
                        <Button variant="default">Log in</Button>
                        <Button>Sign up</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box >
    );
};