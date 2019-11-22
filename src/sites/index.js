import React, {Component} from 'react';
import Api from '../api/api'
import Layout from "../component/layout";
import socketIOClient from "socket.io-client";

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      svg: "",
    };

    let websocket = new WebSocket("wss://api.parking-pilot.com/parkinglots/1778/websocket?api_key=HUK_Team4");
    websocket.onopen = (evt) => {
      console.log('CONNECTED');
    };
    websocket.onmessage = (evt)=>{
      console.log('EVENT!!!', JSON.parse(evt.data))
    };

    /*
    const socket = socketIOClient("wss://api.parking-pilot.com/parkinglots/56308/websocket");
    socket.on("", data => {
      console.log(data)
    });

     */
    this.api = Api.getInstance();

  }

  render() {
    return (
        <Layout>
          <div>Dashbaord</div>

        </Layout>
    )
  }
}

export default Index;
