import React from 'react';
import { Container } from '@mantine/core';
import { NavBar } from './NavBar'


const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <Container size="97%">
                {children}
            </Container>
        </div>
    )
}

export default Layout;
