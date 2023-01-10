import { createStyles } from "@mantine/core";



export const useStyles = createStyles((theme) => ({

    cart_area_wrapper: {
        display: 'flex',
        borderBottom: `2px solid ${theme.colorScheme === 'dark' ? '#fff' : theme.colors.gray[3]}`,
        marginBottom: '10px',
        paddingBottom: '10px',
    },
    image_wrapper : {
        width:'25%'
    },
    cart_context: {
        width: '75%',
    },
    cart_counter_area: {
        display: 'flex',
        justifyContent: 'space-between',
         marginLeft: '10px',

    },
    cart_content_area: {
        width: '65%',
        p: {
            margin: '0px',

        }
    },
    cart_btn_area : {
        display: 'flex',
        width: '35%',
        alignItems: 'end',
        flexDirection: 'column',
    },
    cart_counter: {
        width: '105px',
        marginTop: '10px',
    },

    sub_cost_area: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    }

}));