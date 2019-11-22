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
          <div>Navigation</div>

        </Layout>
    )
  }
}

export default Navigation;
