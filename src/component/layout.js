import React, {Component} from 'react';
import Head from './header'
import Side from './side_menu'

class ReactComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {

  }

  render() {
    return (
        <div className={'layout'}>
          <Head />
          <Side content={this.props.children} />
        </div>

    )
  }
}

export default ReactComponent;
