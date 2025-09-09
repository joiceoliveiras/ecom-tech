import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Produtos from './pages/Produtos'
import Carrinho from './pages/Carrinho'
import PrivateRoute from "./components/PrivateRoute";


export default function App() {
  return (
     <div className="min-h-screen bg-gray-50">
      <Navbar />
      
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/produtos" element={
          <PrivateRoute>
          <Produtos />
          </PrivateRoute>
          } />
        <Route path="/carrinho" element={
          <PrivateRoute>
          <Carrinho />
          </PrivateRoute>
          } />
      </Routes>
    </div>
  )
}