import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default class Header extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu style={{ marginTop: '10px' }}>
                <Link route='/'>
                    <a className='item'>Crowd Coin</a>
                </Link>

                <Menu.Menu position='right'>
                    <Link route='/'>
                        <a className='item'>Campaigns</a>
                    </Link>

                    <Link route='/campaigns/new'>
                        <a className='item'>+</a>
                    </Link>
                </Menu.Menu>
            </Menu>
        )
    }
}