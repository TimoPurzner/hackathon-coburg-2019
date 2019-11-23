import React, {Component} from 'react';
import {Button, Dropdown, Header, Input} from 'semantic-ui-react'

import Layout from '../component/layout'
import Api from '../api/api'
import ReactSVG from "react-svg";

class Workspaces extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dd: [],
      sp: []
    };
    this.api = Api.getInstance();


    this.api.getWorkspaceAll().then(w => {
      w = JSON.parse(w);
      let sp = w.workspaces;

      //Remember users
      this.setState({sp: sp, duration: 0});

      let dd = [];
      // convert for dropdown
      sp.forEach(work => {
        dd.push({key: work.id, value: work.id, text: work.workspace_name})
      });
      console.log('dropdown', dd);

      this.setState({dd: dd})
    });
    this.ocolor = "";
    this.lastEl = null;
    this.id = "";
    this.duration= 0;

  }

  _magic = (e, data) => {
    //reset old element
    if (this.lastEl) this.lastEl.style.fill = this.ocolor;
    let id = data.value;
    let el = document.querySelector(`[id^=\"A${id}\"]`);
    //save old stuff
    this.ocolor = el.style.fill;
    this.lastEl = el;
    this.id = id;
    //fill new color
    el.style.fill = "#EB1ADD";

  };

  _res = () => {
    this.api.createResvervation(this.id,this.duration).catch(e =>{
      console.log(e)
    })
  };

  render() {
    return (
        <Layout>
          <Header as='h1'>Reservierungen</Header>

          <Dropdown
              className='workspaces__input'
              placeholder='Welcher Raum intressiert dich denn?'
              search
              selection
              options={this.state.dd}
              onChange={this._magic}
          />

          <div className={'index__svg'}>
            <ReactSVG src="/images/arbeitsplatz.svg"/>
          </div>
          <div>
            Dauer: <Input
              label={{basic: true, content: 'Stunden'}}
              labelPosition='right'
              placeholder='Dauer der Reservierung'
              onChange={(e, data)=> this.duration=data.value}
          /> <Button className={'workspaces__button'} positive floated={'right'}
                     onClick={this._res}>Reservieren!</Button>
          </div>
        </Layout>
    )
  }
}

export default Workspaces;
