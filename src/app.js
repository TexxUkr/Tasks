import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import MainView from '../src/components/MainView'
import configureStore from './store/configureStore'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <MainView />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
