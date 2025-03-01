import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Register from './pages/authPages/Register'
import Login from './pages/authPages/Login'
import Dashboard from './pages/Dashboard'
import ItemLibrary from './components/dashboard-components/item-library/ItemLibraryContainer'
import ImageLibrary from './components/dashboard-components/image-library/ImageLibrary'
import EditItem from './components/dashboard-components/item-library/EditItem'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Dashboard />}>
            <Route path='/item-library' element={<ItemLibrary />} />
            <Route path='/image-library' element={<ImageLibrary />} />
          </Route>
          <Route path='/item/:id' element={<EditItem />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
