import React, {Component} from 'react';
import { Header, Input, Button, Card, Image  } from 'semantic-ui-react'

import Layout from '../component/layout'
import Api from '../api/api'

class UserSearch extends Component {

  constructor(props) {
    super(props);
    this.state={
      status: []
    };
    this.api=Api.getInstance();

    let websocket = new WebSocket("wss://api.parking-pilot.com/parkinglots/1778/websocket?api_key=HUK_Team4");
    websocket.onopen = (evt) => {
      console.log('CONNECTED');
    };
    websocket.onmessage = (evt)=>{
      console.log('EVENT!!!', JSON.parse(evt.data));
      this.setState({status: evt.data})
    };
  }

  render() {
    return (
        <Layout cla>
          <Header as='h1'>Finde einen Arbeitskollegen</Header>
          <Input placeholder='Name des Kollegen' className={'user_search__input'} />

          <Card>
            <Card.Content>
              <Image
                  floated='right'
                  size='mini'
                  src='/images/steve.jpg'
              />
              <Card.Header>Steve Sanders</Card.Header>
              <Card.Meta>Online seit 22.11.2019 8:05</Card.Meta>
              <Card.Description>
                Ist verfügbar: {}
                Sitzt an: {}
              </Card.Description>
            </Card.Content>
          </Card>

        </Layout>
    )
  }
}

export default UserSearch;
