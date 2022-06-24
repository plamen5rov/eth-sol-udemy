import React, { Component } from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";

class ContributeForm extends Component {

    state = {
        value: ''
    };

    onSubmit = async (event) => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')

            });
        } catch (error) {

        }

    }


    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>Amount to contribute</label>
                    <Input
                        label="ether"
                        labelPosition="right"
                        value={this.state.value}
                        onChange={event => this.setState({ value: event.target.value })}
                    />
                </Form.Field>
                <Button primary>Contribute!</Button>
            </Form>
        );
    }
}

export default ContributeForm;
