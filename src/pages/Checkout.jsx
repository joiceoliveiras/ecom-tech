import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ nome: "", endereco: "", pagamento: "" });

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.nome || !form.endereco || !form.pagamento) {
      alert("Preencha todos os campos!");
      return;
    }
    
    const orderData = {
      cliente: form,
      itens: cart,
      total: subtotal,
      data: new Date().toLocaleString("pt-BR"),
    };

    localStorage.setItem("pedidoFinalizado", JSON.stringify(orderData));


    clearCart();
    navigate("/order-success");
  }

  

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <ul className="mb-6">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between border-b py-2">
            <span>{item.name} (x{item.quantity})</span>
            <span>R$ {(item.price * item.quantity).toLocaleString("pt-BR")}</span>
          </li>
        ))}
      </ul>

      <p className="font-bold mb-6">Subtotal: R$ {subtotal.toLocaleString("pt-BR")}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nome completo"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Endereço"
          value={form.endereco}
          onChange={(e) => setForm({ ...form, endereco: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <select
          value={form.pagamento}
          onChange={(e) => setForm({ ...form, pagamento: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option value="">Selecione forma de pagamento</option>
          <option value="cartao">Cartão de crédito</option>
          <option value="pix">PIX</option>
          <option value="boleto">Boleto</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Finalizar Pedido
        </button>
      </form>
    </div>
  );
}
