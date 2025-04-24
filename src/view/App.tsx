import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../style/App.css'
import '../../node_modules/atropos/atropos.css'
import '../../node_modules/swiper/swiper.css';
import '../../node_modules/swiper/modules/navigation.css';
import '../../node_modules/swiper/modules/pagination.css';
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
