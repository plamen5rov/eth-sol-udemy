import React, { Component } from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import { Card, Grid } from "semantic-ui-react";
import web3 from '../../ethereum/web3';
import ContributeForm from "../../components/ContributeForm";

class CampaignShow extends Component {

    static async getInitialProps(props) {

        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();

        return {
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    renderCards() {
        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount
        } = this.props;

        const items = [
            {
                header: manager,
                description:
                    'ETH address of the manager who created this campaign and as such is the only one authorized to withdraw money.',
                meta: 'Manager Address',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: minimumContribution,
                description:
                    'You must contribute at least this much wei to become an approver.',
                meta: 'WEI',
            },
            {
                header: requestsCount,
                description:
                    'A request tries to withdraw money from the contract. Requests must be approved by approvers.',
                meta: 'Number of Requests',
            },
            {
                header: approversCount,
                description:
                    'Number of people who had already donated to this campaign.',
                meta: 'Number of Approvers',
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                description: 'How much money this campaign has left to spend',
                meta: 'Campaign Balance (ETH)',
            }
        ];

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <h3>Campaign Details</h3>
                <Grid>
                    <Grid.Column width={10}>
                        {this.renderCards()}
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <ContributeForm address={this.props.address} />
                    </Grid.Column>
                </Grid>


            </Layout>

        );
    }
}

export default CampaignShow;