import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './Store'
import reportWebVitals from './reportWebVitals'

const render = () => {
  const App = require('./Components/App').default

  return ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./Components/App', render)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
