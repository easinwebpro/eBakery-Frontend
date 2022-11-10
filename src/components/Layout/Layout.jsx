import React from 'react';
import { Container } from '@mantine/core';
import { NavBar } from './NavBar'
import { PageLoader } from 'components/Loader';


const Layout = ({ loader = false, children }) => {
    return (
        <div>
            <NavBar />
            <Container size="97%">
                {loader === true ? <PageLoader /> : children}
            </Container>
        </div>
    )
}

export default Layout;
