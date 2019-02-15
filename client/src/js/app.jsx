import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import UserBar from 'Components/UserBar'
import Tree from 'Components/Tree'

const App = () => {
  return (
    <>
      <UserBar />
      <div className='main'>
        <Router>
          <Route exact path='/tree' component={Tree} />
        </Router>
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
