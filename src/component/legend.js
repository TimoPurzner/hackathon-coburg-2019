import React, {Component} from 'react';

class ReactComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
        <div>
          <div>
            <div style={{backgroundColor: '#99CC99'}} className={'legend__color'}/>
            <div style={{display: 'inline', marginLeft: 5}} className={'legend_name'}>
              Arbeitsplatz frei
            </div>
          </div>
          <div>
            <div style={{backgroundColor: 'gray'}} className={'legend__color'}/>
            <div style={{display: 'inline', marginLeft: 5}} className={'legend_name'}>
              Arbeitsplatz besetzt
            </div>
          </div>
          <div>
            <div style={{backgroundColor: 'blue'}} className={'legend__color'}/>
            <div style={{display: 'inline', marginLeft: 5}} className={'legend_name'}>
              Arbeitsplatz reserviert
            </div>
          </div>
          <div>
            <div style={{backgroundColor: '#2A4766'}} className={'legend__color'}/>
            <div style={{display: 'inline', marginLeft: 5}} className={'legend_name'}>
              Gang
            </div>
          </div>
          <div>
            <div style={{backgroundColor: '#663300'}} className={'legend__color'}/>
            <div style={{display: 'inline', marginLeft: 5}} className={'legend_name'}>
              Meeting Raum
            </div>
          </div>
          <div>
            <div style={{backgroundColor: '#FF9966'}} className={'legend__color'}/>
            <div style={{display: 'inline', marginLeft: 5}} className={'legend_name'}>
              Tür
            </div>
          </div>
        </div>
    )
  }
}

export default ReactComponent;
