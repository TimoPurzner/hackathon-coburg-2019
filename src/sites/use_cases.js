import React, {Component} from 'react';
import {Button, Dropdown, Header, Input, Message, Segment, Menu} from 'semantic-ui-react'
import Reservation from './use_cases/reservation'
import Layout from '../component/layout'
import Putzen from "./use_cases/putzen";
import Parkuhr from "./use_cases/parkuhr";
import Meetingraum from "./use_cases/meetingraum";


class UseCases extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Arbeitsplatzreservierung'
    };

  }

  _menu = (e, {name}) => {
    this.setState({activeItem: name});
  };

  _component = () => {
    switch (this.state.activeItem) {
      case "Arbeitsplatzreservierung":
        return <Reservation/>;
      case "Putzdienst":
        return <Putzen/>;
      case "Parkuhr":
        return <Parkuhr/>;
      case "Meetingraum":
        return <Meetingraum/>;
      default:
        return <div>Nothing to see</div>;
    }
  }

  render() {
    return (
        <Layout>
          <Header as='h1'>Use Cases</Header>

          <Menu attached='top' tabular>
            <Menu.Item
                name='Arbeitsplatzreservierung'
                active={this.state.activeItem === 'Arbeitsplatzreservierung'}
                onClick={this._menu}
            />
            <Menu.Item
                name='Putzdienst'
                active={this.state.activeItem === 'Putzdienst'}
                onClick={this._menu}
            />
            <Menu.Item
                name='Parkuhr'
                active={this.state.activeItem === 'Parkuhr'}
                onClick={this._menu}
            />
            <Menu.Item
                name='Meetingraum'
                active={this.state.activeItem === 'Meetingraum'}
                onClick={this._menu}
            />
          </Menu>

          <Segment attached='bottom'>
            {this._component()}
          </Segment>


        </Layout>
    )
  }
}

export default UseCases;
