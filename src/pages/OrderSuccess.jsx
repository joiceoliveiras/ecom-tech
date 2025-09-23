// src/pages/OrderSuccess.jsx
import { useEffect, useState } from "react";

export default function OrderSuccess() {
  const [pedido, setPedido] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("pedidoFinalizado");
    if (saved) {
      setPedido(JSON.parse(saved));
      
      localStorage.removeItem("pedidoFinalizado");
    }
  }, []);

  if (!pedido) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold">Nenhum pedido encontrado.</h2>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-lg mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Compra realizada com sucesso 🎉</h2>
      <p className="mb-6">
        Obrigado por comprar na <strong>EcomTech</strong>!
      </p>

      <h3 className="text-lg font-semibold mb-2">Resumo do Pedido</h3>
      <ul className="mb-4 text-left">
        {pedido.itens.map((item) => (
          <li key={item.id} className="flex justify-between border-b py-1">
            <span>
              {item.name} (x{item.quantity})
            </span>
            <span>
              R$ {(item.price * item.quantity).toLocaleString("pt-BR")}
            </span>
          </li>
        ))}
      </ul>

      <p className="font-bold mb-4">
        Total: R$ {pedido.total.toLocaleString("pt-BR")}
      </p>

      <div className="text-left">
        <p><strong>Cliente:</strong> {pedido.cliente.nome}</p>
        <p><strong>Endereço:</strong> {pedido.cliente.endereco}</p>
        <p><strong>Pagamento:</strong> {pedido.cliente.pagamento}</p>
        <p><strong>Data:</strong> {pedido.data}</p>
      </div>
    </div>
  );
}
