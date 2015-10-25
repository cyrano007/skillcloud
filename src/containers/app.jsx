import React, {Component, PropTypes} from 'react'
import {Router, Route} from 'react-router'
import {history} from 'react-router/lib/HashHistory';
import Navigation from 'containers/navigation'
import Canbe from 'containers/canbe'
import TagCloudContainer from 'containers/TagCloudContainer'
import NotFound from 'containers/notfound'

export default class App extends Component
{
  render() {
    return (
      <div className="app">
        <Router history={history}>
          <Route component={Navigation}>
            <Route path="/" component={Canbe} />
            <Route path="/tag/:mode" component={TagCloudContainer} />
            <Route path="*" component={NotFound} />
          </Route>
        </Router>
      </div>
    );
  }
}
