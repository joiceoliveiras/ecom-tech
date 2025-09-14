import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

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
    </div>
  );
}
