import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({

    favorite_icon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    favorite_icon_btn: {
        borderRadius: '50%',
        height: '35px',
        width: '35px',
        border: 'none',
        background: '#FEE',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    },

    'favorite_icon_color': {
        color: 'rgb(255, 4, 0)',
    }

}));