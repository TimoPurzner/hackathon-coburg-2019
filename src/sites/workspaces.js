import React, {Component} from 'react';
import { Header } from 'semantic-ui-react'

import Layout from '../component/layout'
import Api from '../api/api'

class Workspaces extends Component {

  constructor(props) {
    super(props);
    this.state={
      svg: "",
    };
    this.api=Api.getInstance();



    this.api.getSvg("1778").then((d)=>{
      this.setState({svg: d})
    })
  }

  render() {
    return (
        <Layout>
          <div>Inhalt</div>

        </Layout>
    )
  }
}

export default Workspaces;
