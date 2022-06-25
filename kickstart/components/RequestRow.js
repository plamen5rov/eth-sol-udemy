import React, { Component } from "react";
import { Button, Form, Input, Message, Table } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

class RequestRow extends Component {

    render() {
        const { Row, Cell } = Table;
        const { id, request } = this.props;
        return (
            <Row>
                <Cell>{id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
                <Cell>{request.recipient}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{request.description}</Cell>
            </Row>
        )
    }
}

export default RequestRow;