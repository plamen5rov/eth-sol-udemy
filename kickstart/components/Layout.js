import React, { Component } from "react";
import Head from "next/head";
import Header from './Header';
import { Container } from 'semantic-ui-react';




const Layout = (props) => {
    return (
        <Container textAlign="justified">
            <Head>
                <link
                    async
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
                />
            </Head>

            <Header />
            {props.children}
        </Container>
    );
};

export default Layout;