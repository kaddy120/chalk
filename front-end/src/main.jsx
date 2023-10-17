import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Import our custom CSS
import './scss/styles.scss'
import App from './App'

// Import all of Bootstrap's JS
// import 'bootstrap'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
