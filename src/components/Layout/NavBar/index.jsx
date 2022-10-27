import {
    Header,
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    Container
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconNotification, IconCode, IconBook, IconChartPie3, IconFingerprint, IconCoin, IconChevronDown, } from '@tabler/icons';
import { useStyles } from './Navbar.styles';

import { ColorSchemeToggle } from '../../ColorSchemeToggle/ColorSchemeToggle'

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
        <Box pb={120}>
            <Header height={60} px="md">
                <Container size="97%">
                    <Group position="apart" sx={{ height: '100%' }}>
                        <h3>Mantine UI </h3>

                        <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                            <a href="#" className={classes.link}>
                                Home
                            </a>
                            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                                <HoverCard.Target>
                                    <a href="#" className={classes.link}>
                                        <Center inline>
                                            <Box component="span" mr={5}>
                                                Features
                                            </Box>
                                            <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                                        </Center>
                                    </a>
                                </HoverCard.Target>

                                <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                                    <Group position="apart" px="md">
                                        <Text weight={500}>Features</Text>
                                        <Anchor href="#" size="xs">
                                            View all
                                        </Anchor>
                                    </Group>

                                    <Divider
                                        my="sm"
                                        mx="-md"
                                        color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                                    />

                                    <SimpleGrid cols={2} spacing={0}>
                                        {links}
                                    </SimpleGrid>

                                    <div className={classes.dropdownFooter}>
                                        <Group position="apart">
                                            <div>
                                                <Text weight={500} size="sm">
                                                    Get started
                                                </Text>
                                                <Text size="xs" color="dimmed">
                                                    Their food sources have decreased, and their numbers
                                                </Text>
                                            </div>
                                            <Button variant="default">Get started</Button>
                                        </Group>
                                    </div>
                                </HoverCard.Dropdown>
                            </HoverCard>
                            <a href="#" className={classes.link}>
                                Learn
                            </a>
                            <a href="#" className={classes.link}>
                                Academy
                            </a>
                        </Group>

                        <Group className={classes.hiddenMobile}>
                            <ColorSchemeToggle />
                            <Button variant="default">Log in</Button>
                            <Button>Sign up</Button>


                        </Group>

                        <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
                    </Group>
                </Container>
            </Header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                className={classes.hiddenDesktop}
                zIndex={1000000}
            >
                <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

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
        </Box>

    );
};