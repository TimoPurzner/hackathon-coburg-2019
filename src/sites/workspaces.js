import React, {Component} from 'react';
import { Header } from 'semantic-ui-react'
import Head from '../component/header'
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
        <div className=''>
          <Head />


        </div>
    )
  }
}

export default Workspaces;
