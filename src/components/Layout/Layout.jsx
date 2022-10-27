import React from 'react';
import { Container } from '@mantine/core';


const Layout = ({ children }) => {
    return (
        <div>
            <Container size="97%">
                {children}
            </Container>
        </div>
    )
}

export default Layout;
