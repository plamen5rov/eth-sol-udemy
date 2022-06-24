import React, { Component } from "react";
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from "../../../components/Layout";


class RequestNew extends Component {

    state = {
        value: '',
        description: '',
        recipient: '',
        loading: false,
        errorMessage: ''
    };

    static async getInitialProps(props) {

        const { address } = props.query;

        return { address };
    }



    onSubmit = async (event) => {
        event.preventDefault();

        const campaign = new Campaign(this.props.address);

        const { description, value, recipient } = this.state;

        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();

            await campaign.methods.createRequest(
                description,
                web3.utils.toWei(value, 'ether'),
                recipient
            ).send({ from: accounts[0] });


            Router.pushRoute(`/campaigns/${this.props.address}/requests`);

        } catch (error) {
            this.setState({ errorMessage: error.message });
        }

        this.setState({ loading: false });
    };



    render() {
        return (
            <Layout>
                <div>
                    <h3 style={{ marginBottom: '20px' }}>Create New Request</h3>
                </div>

                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Description</label>
                        <Input
                            placeholder='What is this request for?'
                            value={this.state.description}
                            onChange={event =>
                                this.setState({ description: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Value (ETH)</label>
                        <Input
                            placeholder='Request Cost (in wei)'
                            label='wei' labelPosition="right"
                            value={this.state.value}
                            onChange={event =>
                                this.setState({ value: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient</label>
                        <Input
                            placeholder='ETH address of the recepient of the request'
                            label='ETH address' labelPosition="right"
                            value={this.state.recipient}
                            onChange={event =>
                                this.setState({ recipient: event.target.value })}
                        />
                    </Form.Field>
                    <Message error header='Oops! Something went wrong!'
                        content={this.state.errorMessage} />
                    <Button loading={this.state.loading} primary>Create!</Button>
                    <div>
                        <Link route={`/campaigns/${this.props.address}/requests`}>
                            <a>
                                <Button primary style={{ float: 'right' }}>Back</Button>
                            </a>
                        </Link>
                    </div>
                </Form>
            </Layout >

        );
    }

}

export default RequestNew;