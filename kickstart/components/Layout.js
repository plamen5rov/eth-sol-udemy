import React, { Component } from "react";
import Header from './Header';
import { Container } from 'semantic-ui-react';




const Layout = (props) => {
    return (
        <Container textAlign="justified">
            <Header />
            {props.children}
        </Container>
    );
};

export default Layout;