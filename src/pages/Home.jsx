import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative bg-gray-100 min-h-[80vh] flex items-center justify-center">
      
      <img
        src="https://cdn.pixabay.com/photo/2023/04/10/10/30/keyboard-7913431_1280.jpg"
        alt="Loja de tecnologia"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

     
      <div className="relative text-center max-w-xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Bem-vindo à <span >EcomTech</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Os melhores produtos de tecnologia em um só lugar 🚀
        </p>
        <Link
          to="/produtos"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Ver Produtos
        </Link>
      </div>
    </div>
  );
}
