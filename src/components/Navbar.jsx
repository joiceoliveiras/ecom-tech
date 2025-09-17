import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between">
      <Link to="/" className="text-xl font-bold">
        ecom<span className="text-blue-400">tech</span>
      </Link>
      
      <div className="flex gap-5">
        <Link to="/produtos">Produtos</Link>

        <Link to="/carrinho" className="relative">
          Carrinho
          {cart.length > 0 && (
            <span
              className="absolute -top-2 -right-3 bg-red-500 text-xs text-white rounded-full px-2 py-0.5"
            >
              {cart.length}
            </span>
          )}
        </Link>
      </div>

      <div>
        {user ? (
          <>
            <span className="mr-4">{user.email}</span>
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Sair
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
