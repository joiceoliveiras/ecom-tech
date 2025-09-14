import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        Ecom<span className="text-gray-800">Tech</span>
      </div>

      {/* Links */}
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <Link to="/login" className="hover:text-blue-600 transition">
            Login
          </Link>
        </li>
        <li>
          <Link to="/produtos" className="hover:text-blue-600 transition">
            Produtos
          </Link>
        </li>
        <li>
          <Link to="/carrinho">
            Carrinho ({cart.length})
          </Link>
        </li>
      </ul>
    </nav>
  )
}
