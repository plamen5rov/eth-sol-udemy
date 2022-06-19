import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Button, Form, Input } from 'semantic-ui-react';

class CampaignNew extends Component {
    state = {
        minimumContribution: ''
    };

    render() {
        return (
            <Layout>
                <h3>Create new Campaign</h3>
                <Form>
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