import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Root from './components/Root'
import registerServiceWorker from './registerServiceWorker'

const store = {}

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)

registerServiceWorker()
