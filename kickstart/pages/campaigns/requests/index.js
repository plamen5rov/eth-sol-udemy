import React, { Component } from "react";
import { Button, Table, Label } from "semantic-ui-react";
import { Link } from "../../../routes";
import Layout from "../../../components/Layout";
import Campaign from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow";


class RequestIndex extends Component {

    static async getInitialProps(props) {

        const { address } = props.query;

        const campaign = Campaign(address);

        const requestCount = await campaign.methods.getRequestsCount().call();

        const requests = await Promise.all(
            Array(parseInt(requestCount))
                .fill()
                .map((element, index) => {
                    return campaign.methods.requests(index).call()
                })
        );



        return { address, requests, requestCount };
    }

    renderRow() {
        return this.props.requests.map((request, index) => {
            return <RequestRow
                key={index}
                id={index}
                request={request}
                address={this.props.address}
            />
        })
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>Requests List</h3>
                </div>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Amount</Table.HeaderCell>
                            <Table.HeaderCell>Recipient</Table.HeaderCell>
                            <Table.HeaderCell>Approval Count</Table.HeaderCell>
                            <Table.HeaderCell>Approve</Table.HeaderCell>
                            <Table.HeaderCell>Finalize</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.renderRow()}
                    </Table.Body>
                </Table>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary>Add Request</Button>
                    </a>
                </Link>
            </Layout>

        );
    }

}

export default RequestIndex;
