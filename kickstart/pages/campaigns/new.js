import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Button, Form } from 'semantic-ui-react';

class CampaignNew extends Component {
    render() {
        return (
            <Layout>
                <h3>Create new Campaign</h3>
                <Form>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <input placeholder='Minimum Contribution' />
                    </Form.Field>

                    <Button type='submit' primary>Create!</Button>
                </Form>
            </Layout>

        );
    }
}

export default CampaignNew;