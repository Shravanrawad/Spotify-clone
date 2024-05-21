import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Playercontexprovider from './contex/playercontex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Playercontexprovider>
    <App />
    </Playercontexprovider>
    </BrowserRouter>
  </React.StrictMode>,
)
