import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar1 from './components/Navbar'
// import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Navbar1/>
      <Routes>
        <Route path='/' element={<Home/>}
        />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
