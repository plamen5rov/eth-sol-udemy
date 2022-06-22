import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Button, Form, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignShow extends Component {


    render() {
        return (
            <Layout>
                <h3>Campaign Details</h3>
            </Layout>

        );
    }
}

export default CampaignShow;