import React, {Component} from 'react';
import Api from '../api/api'

class ParkingSlots extends Component {

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
          <h1>string:team</h1>

          {this.state.svg}

        </div>
    )
  }
}

export default ParkingSlots;
