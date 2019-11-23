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
    });

    setTimeout(() => {
      this.api.getWorkspaceAll().then(d => {
        d = JSON.parse(d);
        let work = d.workspaces;
        work.forEach(w => {
          let e = document.querySelector(`[id^="A${w.id}"]`);
          if (w.occupied) {
            e.style.fill = "gray";
          } else if (w.reserved) {
            e.style.fill = "blue";
            setTimeout(() => {
              this._event(null);
            }, 16000);
          } else {
            // if free
            if(e) e.style.fill = "#99CC99";
          }
        });

      });
    }, 2000);


  }

  _magic=(e, data)=>{
    let id=data.value;
    // find user
    let u=this.state.users.filter(x => x.id===id)[0];
    console.log(u);
    let el = document.querySelector(`[id^=\"A${u.psid}\"]`);
    let ocolor=el.style.fill;
    console.log('FARBE?', ocolor);
    el.style.fill = "#EB1ADD";
    setTimeout(()=>{ el.style.fill = ocolor; }, 1000);
    setTimeout(()=>{ el.style.fill = "#EB1ADD"; }, 2000);
    setTimeout(()=>{ el.style.fill = ocolor; }, 3000);
    setTimeout(()=>{ el.style.fill = "#EB1ADD"; }, 4000);
    setTimeout(()=>{ el.style.fill = ocolor; }, 5000);
    setTimeout(()=>{ el.style.fill = "#EB1ADD"; }, 6000);
    setTimeout(()=>{ el.style.fill = ocolor; }, 7000);
  };

  _event=(evt) =>{
    //console.log('EVENT!!!', JSON.parse(evt.data));
    this.api.getWorkspace().then(d => {
      d = JSON.parse(d);
      console.log("first API REQUEST!", d);
      let e = document.querySelector('[id^=\"A56308\"]');
      console.log("occupied", d.occupied, d.reserved);

      if (d.occupied) {
        console.log('AFSDFADSADFSADFSADFSADSFADFSADFSADFS')
        e.style.fill = "gray";
      } else if (d.reserved) {
        e.style.fill = "blue";
        setTimeout(() => {
          this._event(evt);
        }, 16000);
      } else {
        // if free
        e.style.fill = "#99CC99";
      }
      console.log("ELEMENT", e)
    });
  }

  render() {
    return (
        <Layout>
          <Header as='h1'>Finde einen Arbeitskollegen</Header>

          <Dropdown
              className='index__input'
              placeholder='Wenn suchst du?'
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
