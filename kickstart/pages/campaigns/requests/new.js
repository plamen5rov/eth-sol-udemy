import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "../../../routes";
import Layout from "../../../components/Layout";


class RequestNew extends Component {

    static async getInitialProps(props) {

        const { address } = props.query;

        return { address };
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>Create New Request</h3>
                </div>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary>Add Request</Button>
                    </a>
                </Link>
            </Layout>

        );
    }

}

export default RequestNew;