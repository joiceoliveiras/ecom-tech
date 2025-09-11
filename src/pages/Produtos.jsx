import { useMemo, useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Produtos() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("relevance");

  const filtered = useMemo(() => {
    const base = products.filter((p) => {
      const term = q.trim().toLowerCase();
      if (!term) return true;
      return (
        p.name.toLowerCase().includes(term) ||
        p.brand.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
      );
    });

    if (sort === "price-asc") return [...base].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") return [...base].sort((a, b) => b.price - a.price);
    return base;
  }, [q, sort]);

  return (
    <div className="p-6">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar por nome, marca ou categoria..."
          className="border p-2 rounded w-full sm:w-72"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded w-full sm:w-56"
        >
          <option value="relevance">Ordenar: Relevância</option>
          <option value="price-asc">Preço: menor → maior</option>
          <option value="price-desc">Preço: maior → menor</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">Nenhum produto encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={() => alert(`${p.name} adicionado (placeholder)`)} />
          ))}
        </div>
      )}
    </div>
  );
}
