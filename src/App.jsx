
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  return (
    <>
      {/* path for landing (baseurl:http://localhost:5173),home (baseurl:http://localhost:5173/home),history (baseurl:http://localhost:5173/history) */}
      {/* header */}
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/history' element={<History/>} />
      </Routes>
      {/* footer */}
      <Footer/>
    </>
  )
}

export default App
