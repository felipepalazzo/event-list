import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from './reducers'
import Root from './components/Root'
import registerServiceWorker from './registerServiceWorker'

const middleware = applyMiddleware(createLogger(), thunk)
const store = createStore(reducers, middleware)

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)

registerServiceWorker()
