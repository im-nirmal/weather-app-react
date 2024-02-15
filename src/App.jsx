
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './assets/components/Login'
import Dashboard from './assets/components/Dashboard'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </>
  )
}

export default App
