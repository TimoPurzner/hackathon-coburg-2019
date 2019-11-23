import React, {Component} from 'react';
import {Button, Dropdown, Header, Input, Message, Icon} from 'semantic-ui-react'

import Layout from '../component/layout'
import Api from '../api/api'
import ReactSVG from "react-svg";

class Workspaces extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dd: [],
      sp: [],
      loading: false,
      finished: false
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

  _res = () => {
    this.setState({loading: true, finished: false});
    this.api.createResvervation(this.id,this.duration).then(e =>{
      this.setState({loading: false, finished: true});
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
          {this.state.loading &&
          <Message icon>
            <Icon name='circle notched' loading/>
            <Message.Content>
              <Message.Header>Raum wird Reserviert</Message.Header>
              Die Umpalumpas Arbeiten
            </Message.Content>
          </Message>
          }
          {this.state.finished &&
          <Message positive>
            <Message.Header>Der Platz wurde für dich Reserviert</Message.Header>
            <p>
              Schnapp dir deinen Platz in den nächsten <b>10 Minuten!</b>
            </p>
          </Message>
          }

        </Layout>
    )
  }
}

export default Workspaces;
