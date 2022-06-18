import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Header extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item
                    name='browse'
                    active={activeItem === 'browse'}
                    onClick={this.handleItemClick}
                >
                    Crowd Coin
                </Menu.Item>



                <Menu.Menu position='right'>
                    <Menu.Item
                        name='signup'
                        active={activeItem === 'signup'}
                        onClick={this.handleItemClick}
                    >
                        Campaigns
                    </Menu.Item>

                    <Menu.Item
                        name='help'
                        active={activeItem === 'help'}
                        onClick={this.handleItemClick}
                    >
                        +
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}