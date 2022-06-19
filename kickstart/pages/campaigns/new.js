import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Button, Form, Input } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class CampaignNew extends Component {
    state = {
        minimumContribution: ''
    };

    onSubmit = async (event) => {
        event.preventDefault();

        const accounts = await web3.eth.getAccounts();

        await factory.methods
            .createCampaign(this.state.minimumContribution)
            .send({
                from: accounts[0]
            });
    };

    render() {
        return (
            <Layout>
                <h3>Create new Campaign</h3>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input
                            placeholder='Minimum Contribution (in wei)'
                            label='wei' labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={event =>
                                this.setState({ minimumContribution: event.target.value })}
                        />
                    </Form.Field>

                    <Button type='submit' primary>Create!</Button>
                </Form>
            </Layout>

        );
    }
}

export default CampaignNew;