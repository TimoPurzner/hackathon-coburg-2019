import React, {Component} from 'react';
import { Header } from 'semantic-ui-react'
import Api from '../api/api'

class Index extends Component {

  constructor(props) {
    super(props);
    this.state={
      svg: "",
    };
    this.api=Api.getInstance();

  }

  render() {
    return (
        <div className=''>
          <Header as='h1'>Smart Working with &lt;string:team&gt; </Header>


        </div>
    )
  }
}

export default Index;
