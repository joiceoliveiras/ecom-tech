import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Produtos from './pages/Produtos'
import Carrinho from './pages/Carrinho'


export default function App() {
  return (
     <div className="min-h-screen bg-gray-50">
      <Navbar />
      
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </div>
  )
}