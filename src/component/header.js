import React, {Component} from 'react';
import {Image, Menu, Header} from "semantic-ui-react";

class Head extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
        <div className='header'>
          <Image src='/images/logo.svg' size='tiny' floated='left'/>
          <div className='header__name'>
            <Header centered as='h2'>Smart Workspaces</Header>
          </div>
        </div>

    )
  }
}

export default Head;
