import {API_CONFIG} from './config'

export default class API {

  constructor() {
    //Singelton
    if (API.singelton === undefined) {
      API.singelton = this;
    } else {
      throw new Error('Singelton please use getInstance()');
    }

    this.url = API_CONFIG.url;
    this.token= API_CONFIG.api_key;

  }

  static getInstance() {
    return API.singelton;
  }

  getUser(id) {
    return this.request('PUT', 'user/select_customer', id)
  }


  async getGateways() {
    return this.request('GET', 'controller')
  }


  getDeviceByGateway(id) {
    return this.request('GET', `controller/${id}/sensor`)
  }

  getSvg(id){
    return this.request('GET', `parkinglots/${id}/svg`, null,"application/xml")
  }

  getParkingSlots(){
    return this.request('GET', 'parkinglots')
  }

  getWorkspace(){
    return this.request('GET', 'workspace/56308')
  }

  getUsers(){
    return this.request('GET', 'user/all')
  }


  async request(type, url, data = null, content_type="application/json; charset=utf-8") {

    return new Promise((resolve, reject) => {

      // Do the usual Ajax stuff
      let xhttp = new XMLHttpRequest();

      xhttp.onload = () => {
        // so check the status cauz 404 will also trigger
        if (xhttp.status === 200) {
          resolve(xhttp.response)
        }

        if (xhttp.status === 401) {
          //If the action is not refreshing the token
          reject({error: 'unauthorized', msg: 'Session abgelaufen, bitte melde dich neu an', response: xhttp})
        }
        else {
          // Otherwise reject with the status text
          reject(xhttp.response);
        }
      };

      // Handle network errors
      xhttp.onerror = () => {
        reject({error: "network_error", msg: 'Prüfe deine Netzwerk verbindung'});
      };

      xhttp.open(type, this.url+url+`?api_key=${this.token}`, true);

      console.log(this.url+url+`?api_key=${this.token}`);
      console.log(this.token);

      xhttp.setRequestHeader('Content-Type', content_type);
      //xhttp.setRequestHeader('X-Auth-Token', this.token);

      xhttp.send(data);
    })
  }
}
