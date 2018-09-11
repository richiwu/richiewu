import React, {Component} from 'react'
import {Container, Menu} from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'


class NavBar extends Component {
    state = {
        activeItem: 'about'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
        const { activeItem } = this.state
        return(
            <div class="main-nav">
                <Container>
                    <Menu pointing secondary>
                        <Menu.Item
                            as={Link} to='/about'
                            name='about'
                            active={activeItem === 'about'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            as={Link} to='/work'
                            name='work'
                            active={activeItem === 'work'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            as={Link} to='/life'
                            name='life'
                            active={activeItem === 'life'}
                            onClick={this.handleItemClick}
                        />
                    </Menu>
                </Container>
            </div>
        )
    }
}

export default withRouter(NavBar)