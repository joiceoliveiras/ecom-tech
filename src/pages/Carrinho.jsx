import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
 const navigate = useNavigate();
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <p className="p-6">Seu carrinho está vazio</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Carrinho</h2>
      <ul className="space-y-4">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>R$ {item.price.toLocaleString("pt-BR")}</p>
              <div className="flex items-center gap-2 mt-1">
                <button
                  onClick={() =>
                    updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                  }
                  className="bg-gray-300 px-2 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-300 px-2 rounded"
                >
                  +
                </button>
              </div>

            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6 font-bold text-lg">
        Subtotal: R$ {subtotal.toLocaleString("pt-BR")}
      </div>

      <button
        onClick={() => navigate("/checkout")}
        className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
      >
        Finalizar Compra
      </button>
      
    </div>
  );
}
