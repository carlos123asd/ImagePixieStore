import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../style/App.css'
import Home from './Home'
import MyCollection from './MyCollection'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mycollection' element={<MyCollection />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
