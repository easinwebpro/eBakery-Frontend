import {React, useState} from 'react'
import Layout from 'components/Layout/Layout';
import { Button } from '@mantine/core';
import { Grid } from '@mantine/core';
import { IconCategory, IconTruckDelivery, IconUser, IconLogout, IconBasket  } from '@tabler/icons';

const profile = () => {


const buttonGroup = [
    {btn: <Button leftIcon={<IconCategory size={15} />} variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}
    styles={() => ({
        root: {
            minWidth: 220
        }
    })}>Dashboard</Button>},
    {btn: <Button leftIcon={<IconBasket size={15} />} variant="default"
    styles={() => ({
        root: {
            minWidth: 220
        }
    })}>Orders</Button>},
    {btn: <Button leftIcon={<IconTruckDelivery size={15} />} variant="default"
    styles={() => ({
        root: {
            minWidth: 220
        }
    })}>Track Your Order</Button>},
    {btn: <Button leftIcon={<IconUser size={15} />} variant="default"
    styles={() => ({
        root: {
            minWidth: 220
        }
    })}>Account Details</Button>},
    {btn: <Button leftIcon={<IconLogout size={15} />} variant="default"
    styles={() => ({
        root: {
            minWidth: 220
        }
    })}>Logout</Button>}
]

    return (
        <div>
        <Layout>
            <h3>Profile Pages</h3>
           {buttonGroup.map((data, index) => (
               <div>{data.btn}</div>
           ))}
          
        </Layout>
            
        </div>
    )


}

export default profile;
