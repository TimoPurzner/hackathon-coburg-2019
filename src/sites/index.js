import React, {Component} from 'react';
import Api from '../api/api'
import Layout from "../component/layout";
import ReactSVG from 'react-svg'
import socketIOClient from "socket.io-client";
import {Header} from 'semantic-ui-react'

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      svg: "",
    };

    this.api = Api.getInstance();
    let websocket = new WebSocket("wss://api.parking-pilot.com/parkinglots/1778/websocket?api_key=HUK_Team4");

    websocket.onopen = (evt) => {
      console.log('CONNECTED');
    };

    websocket.onmessage = (evt) => {
      this._event(evt)
    };
  }

  _event(evt){
    console.log('EVENT!!!', JSON.parse(evt.data));
    this.api.getWorkspace().then(d => {
      d= JSON.parse(d);
      console.log("first API REQUEST!", d);
      let e = document.querySelector('[id^=\"A56308\"]');
      console.log("occupied",d.occupied, d.reserved)

      if(d.occupied){
        console.log('AFSDFADSADFSADFSADFSADSFADFSADFSADFS')
        e.style.fill = "gray";
      }else if(d.reserved){
        e.style.fill = "blue";
        setTimeout(()=>{ this._event(evt); }, 16000);
      }else{
        e.style.fill = "#330000";
      }
      console.log("ELEMENT", e)
    });
  }
  render() {
    return (
        <Layout>
          <div className={'index__svg'} >
            <ReactSVG src="/images/arbeitsplatz.svg"/>
          </div>

          <div className={'index__legende'}>

          </div>

        </Layout>
    )
  }
}

export default Index;
