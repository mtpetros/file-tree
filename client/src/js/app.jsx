import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import store from 'Reducers/store'

import UserBar from 'Components/UserBar'
import Tree from 'Components/Tree'

const App = () => {
  return (
    <Provider store={store}>
      <UserBar />
      <div className='main'>
        <Router>
          <Route exact path='/tree' component={Tree} />
        </Router>
      </div>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
