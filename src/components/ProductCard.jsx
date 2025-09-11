import { formatCurrency } from "../utils/formatCurrency";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded-xl"
      />

      <div className="mt-3 flex-1">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.brand}</p>
        <p className="mt-2 font-bold">
  R$ {product.price.toLocaleString("pt-BR")}
</p>
      </div>

      <button
        onClick={() => onAdd && onAdd(product)}
        className="mt-4 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Adicionar
      </button>
    </div>
  );
}
