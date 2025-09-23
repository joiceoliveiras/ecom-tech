import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-6 py-3">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          ecom<span className="text-blue-400">tech</span>
        </Link>

        {/* Botão Hamburguer (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // X
                  : "M4 6h16M4 12h16M4 18h16" // 3 linhas
              }
            />
          </svg>
        </button>

        {/* Links (desktop) */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/produtos">Produtos</Link>
          <Link to="/carrinho" className="relative">
            Carrinho
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs text-white rounded-full px-2 py-0.5">
                {totalItems}
              </span>
            )}
          </Link>

          {user ? (
            <>
              <span>{user.email}</span>
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
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-3">
          <Link to="/produtos" onClick={() => setIsOpen(false)}>
            Produtos
          </Link>
          <Link to="/carrinho" onClick={() => setIsOpen(false)} className="relative">
            Carrinho
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs text-white rounded-full px-2 py-0.5">
                {totalItems}
              </span>
            )}
          </Link>

          {user ? (
            <>
              <span>{user.email}</span>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Sair
              </button>
            </>
          ) : (
            <Link to="/login" onClick={() => setIsOpen(false)}>
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
