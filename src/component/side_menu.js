import React, {Component} from 'react';
import {Grid, Menu, Segment} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';

class ReactComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let path = this.props.location.pathname
    return (
        <div className={'side_menu'}>
          <Grid>
            <Grid.Column className={'side_menu__spalte'} width={4}>
              <Menu fluid vertical tabular className={'side_menu__menu'}>
                <Menu.Item
                    name='Dashboard'
                    active={path==='/dashboard'}
                    onClick={()=>this.props.history.push('/dashboard')}
                />
                <Menu.Item
                    name='Benutzersuche'
                    active={path==='/userSearch'}
                    onClick={()=>this.props.history.push('/userSearch')}
                />
                <Menu.Item
                    name='Reservierung'
                    active={path==='/workspaces'}
                    onClick={()=>this.props.history.push('/workspaces')}
                />
                <Menu.Item
                    name='Navigation'
                    active={path==='/navigation'}
                    onClick={()=>this.props.history.push('/navigation')}
                />
              </Menu>
            </Grid.Column>

            <Grid.Column width={12}>

              {this.props.content}

            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

export default withRouter(ReactComponent);
