import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar1 from './components/Navbar'
// import Navbar from './components/Navbar'
import Home from './pages/Home'
import TopNavbar from './components/TopNavbar'
import './index.css'
import Signup from './pages/Signup'

function App() {
  

  return (
    <div className='app'>
      <BrowserRouter>
      <TopNavbar/>
      <Navbar1/>
      <div className='pages'>

      <Routes>
        <Route path='/' element={<Home/>}
        />
      </Routes>
      <Routes>
        <Route path='/signup' element={<Signup/>}
        />
      </Routes>
      </div>

      </BrowserRouter>
    </div>
  )
}

export default App
