import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({

    menu_wrapper_mbn: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 0px',
    },
    category_wrapper: {
        width: '25%',
    },
    menubar_wrapper_bn: {
        width: '55%',
    },
    calltoaction: {
        width: '20%',
        display: 'flex',
        justifyContent: 'end',
    },


    smart_scroll: {
        position: 'fixed',
        marginBottom: '10px',
        top: '0',
        right: '0',
        left: '0',
        zIndex: '1030',
        boxShadow: '0 8px 20px 0 rgb(0 0 0 / 5%)'
    },
    scrolled_down: {
        transform: 'translateY(-100%), transition: all 0.3s ease-in-out',
    },
    scrolled_up: {
        transform: 'translateY(0), transition: all 0.3s ease-in-out'
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            color: theme.colors.green[5],
        },
    },

    linkLabel: {
        marginRight: 5,
    },

    support_center: {
        display: 'flex',
        alignItems: 'center'
    },
    support_center_con: {
        marginLeft: '10px',
    },
    support_center_title: {
        fontWeight: 'bold',
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
