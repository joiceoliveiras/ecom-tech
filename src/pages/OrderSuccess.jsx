import { Link } from "react-router-dom";

export default function OrderSuccess() {
  const orderId = Math.floor(Math.random() * 1000000);

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        Pedido realizado com sucesso! 🎉
      </h2>
      <p className="mb-4">Número do pedido: <strong>#{orderId}</strong></p>
      <Link
        to="/produtos"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Voltar às compras
      </Link>
    </div>
  );
}
