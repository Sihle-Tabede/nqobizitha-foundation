import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { PreferencesProvider } from './context/Preferences'
import { DemoAuthProvider } from './context/DemoAuth'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PreferencesProvider>
      <DemoAuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DemoAuthProvider>
    </PreferencesProvider>
  </React.StrictMode>,
)
