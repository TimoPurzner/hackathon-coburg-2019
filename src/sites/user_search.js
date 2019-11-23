import React, {Component} from 'react';
import { Header, Input, Button, Card, Image, Dropdown  } from 'semantic-ui-react'
import Legend from '../component/legend'

import Layout from '../component/layout'
import Api from '../api/api'
import ReactSVG from "react-svg";

class UserSearch extends Component {

  constructor(props) {
    super(props);
    this.state={
      users: [],
      dd: []
    };
    this.api=Api.getInstance();
    // { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }

    this.api.getUsers().then(d=>{
      d=JSON.parse(d);
      let users=d.users;

      //Remember users
      this.setState({users: users});

      console.log(users);
      let dd=[];
      // convert for dropdown
      users.forEach(user => {
        dd.push({key: user.id, value: user.id, text:user.name})
      });
      console.log('dropdown', dd);

      this.setState({dd:dd})
    })

  }

  _magic=(e, data)=>{
    let id=data.value;
    // find user
    let u=this.state.users.filter(x => x.id===id)[0];
    console.log(u)

  };

  render() {
    return (
        <Layout cla>
          <Header as='h1'>Finde einen Arbeitskollegen</Header>

          <Dropdown
              placeholder='Wenn suchst du?'
              fluid
              search
              selection
              options={this.state.dd}
              onChange={this._magic}
          />


          <div className={'index__svg'}>
            <ReactSVG src="/images/arbeitsplatz.svg"/>
          </div>
          <Legend />

        </Layout>
    )
  }
}

export default UserSearch;
