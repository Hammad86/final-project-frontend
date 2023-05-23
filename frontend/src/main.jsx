import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WorkoutContextProvider } from './context/WorkoutContext.jsx'
//  Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WorkoutContextProvider>
    <App />
    </WorkoutContextProvider>
    
  </React.StrictMode>,
)
