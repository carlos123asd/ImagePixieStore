import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import '../style/App.css'
import '../../node_modules/atropos/atropos.css'
import '../../node_modules/swiper/swiper.css';
import '../../node_modules/swiper/modules/navigation.css';
import '../../node_modules/swiper/modules/pagination.css';
import Home from './Home'
import MyCollection from './MyCollection'
import { store } from '../features/store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mycollection' element={<MyCollection />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
