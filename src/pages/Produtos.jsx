
import ProductCard from "../components/ProductCard";

const mockProducts = [
  {
    id: 1,
    name: "Notebook Pro 15",
   
    price: 5999.9,
    image: "https://i.pinimg.com/736x/28/ad/f2/28adf2236334366980399ac53af48cf2.jpg",
   
  },
  {
    id: 2,
    name: "Headset Gamer X",
   
    price: 399.9,
    image: "https://i.pinimg.com/736x/4c/60/20/4c6020c95b127de839495d15e6be47dc.jpg",
   
  },
  {
    id: 3,
    name: "Mouse Gamer RGB",
   
    price: 189.9,
    image: "https://i.pinimg.com/736x/29/ce/0d/29ce0dd3009ff3e76e741259821f75fe.jpg",
  
  },
  {
    id: 4,
    name: "Teclado Mecânico 60%",
    
    price: 349.9,
    image: "https://i.pinimg.com/736x/3f/32/fb/3f32fb75b15b56eb5fdd17a43dfc3b00.jpg",
   
  },
  {
    id: 5,
    name: "Monitor 27\" 144Hz",
  
    price: 1499.9,
    image: "https://i.pinimg.com/736x/5d/23/e9/5d23e996c7861384ce29bf291e63dc59.jpg",
   
  },
  {
    id: 6,
    name: "Webcam Full HD",
    
    price: 229.9,
    image: "https://i.pinimg.com/736x/7d/ac/a0/7daca0cd42b6592336b0d616be1b81d3.jpg",
   
  },
  {
    id: 7,
    name: "Microfone USB Studio",
   
    price: 499.9,
    image: "https://i.pinimg.com/736x/cf/69/d8/cf69d867e73ab71eefebfc126b57516f.jpg",
  
  },
  {
    id: 8,
    name: "Hub USB-C 7-em-1",
 
    price: 159.9,
    image: "https://i.pinimg.com/736x/74/39/ec/7439ec4584635d757192863cd1a1872c.jpg",
    
  }
];

export default function Products() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Produtos</h2>

      {/* Grid de cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockProducts.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}
