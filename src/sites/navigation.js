import React, {Component} from 'react';
import { Header } from 'semantic-ui-react'

import Layout from '../component/layout'
import Api from '../api/api'

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state={
    };
    this.api=Api.getInstance();
  }

  render() {
    return (
        <Layout>
          <Header as='h1'>Navigation</Header>

        </Layout>
    )
  }
}

export default Navigation;
