import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    menu_wrapper: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0px',
        [theme.fn.smallerThan('sm')]: {
            padding: '13px 0px',
            margin: '0 !important'
        },
    },
    logo_wrapper: {
        width: '20%',
        [theme.fn.smallerThan('sm')]: {
            width: '50%',
        },
        h3: {
            margin: 0,
            [theme.fn.smallerThan('sm')]: {
                textAlign: 'center',
            },
        },

    },
    search_bar: {
        width: '70%',
    },
    profile: {
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
    },
    mobile_menu: {
        width: '20%',
        display: 'flex',
        justifyContent: 'start',
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,

        [theme.fn.smallerThan('sm')]: {
            height: 42,
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        }),
    },

    subLink: {
        width: '100%',
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        borderRadius: theme.radius.md,

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        }),

        '&:active': theme.activeStyles,
    },

    dropdownFooter: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        margin: -theme.spacing.md,
        marginTop: theme.spacing.sm,
        padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
            }`,
    },

    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none !important',
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan('sm')]: {
            display: 'none !important',
        },
    },
}));
