import {
  ActionIcon,
  Container,
  createStyles,
  Group,
  List,
  Text,
} from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconClock,
  IconHeadset,
  IconMail,
  IconMapPin,
} from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: 'block',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export const Footer = () => {
  const { classes } = useStyles();

  const data = [
    {
      title: 'Useful Links',
      links: [
        {
          label: 'Join Discord',
          link: '#',
        },
      ],
    },
    {
      title: 'Business',
      links: [
        {
          label: 'Join Discord',
          link: '#',
        },
      ],
    },
    {
      title: 'Community',
      links: [
        {
          label: 'Join Discord',
          link: '#',
        },
      ],
    },
  ];

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <MantineLogo size={30} />
          <Text size='xs' color='dimmed' className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
          <Group spacing={0} className={classes.social}>
            <List>
              <List.Item>
                <IconMapPin size={18} stroke={1.5} color={'green'} />
            <Text color='dimmed' size='sm'>
              Connect:
            </Text>
              </List.Item>
              <List.Item>
                <IconHeadset size={18} stroke={1.5} color={'green'} />
            <Text color='dimmed' size='sm'>
              Connect:
            </Text>
              </List.Item>
              <List.Item>
                <IconMail size={18} stroke={1.5} color={'green'} />
            <Text color='dimmed' size='sm'>
              Connect:
            </Text>
              </List.Item>
              <List.Item>
                <IconClock size={18} stroke={1.5} color={'green'} />
            <Text color='dimmed' size='sm'>
              Connect:
            </Text>
              </List.Item>
            </List>        
          </Group>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>

      <Container className={classes.afterFooter}>
        <Text color='dimmed' size='sm'>
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position='right' noWrap>
          <Text color='dimmed' size='sm'>
            Connect:
          </Text>
          <ActionIcon size='lg'>
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg'>
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg'>
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
};
