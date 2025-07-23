import { useState } from "react";
import CartMenu from "../componenets/CartMenu"; // ✅ Correct import path

const categories = ["All", "Fiction", "Non-Fiction", "Academic", "Comics"];

const books = [
  { name: "The Great Gatsby", price: "₹299", category: "Fiction", image: "images/gatsby.jpg" },
  { name: "Sapiens", price: "₹499", category: "Non-Fiction", image: "images/sapiens.jpg" },
  { name: "Engineering Math", price: "₹650", category: "Academic", image: "images/math.jpg" },
  { name: "Batman: Year One", price: "₹399", category: "Comics", image: "images/batman.jpg" },
  { name: "Atomic Habits", price: "₹350", category: "Non-Fiction", image: "images/atomic.jpg" },
  { name: "To Kill a Mockingbird", price: "₹320", category: "Fiction", image: "images/mockingbird.jpg" },
  { name: "Organic Chemistry", price: "₹720", category: "Academic", image: "images/chemistry.jpg" },
  { name: "Avengers: Endgame", price: "₹440", category: "Comics", image: "images/avengers.jpg" },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  const handleAddToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  const handleRemoveFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 relative">
      {/* ✅ Cart Menu */}
      <CartMenu cartItems={cart} onRemoveFromCart={handleRemoveFromCart} />

      <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">Our Books</h1>

      {/* Category Filter */}
      <div className="overflow-x-auto whitespace-nowrap flex gap-4 pb-4 border-b mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm border hover:bg-indigo-100 transition ${
              selectedCategory === cat
                ? "bg-indigo-600 text-white"
                : "text-indigo-800 border-indigo-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredBooks.map((book, idx) => (
          <div
            key={idx}
            className="bg-white shadow rounded-xl overflow-hidden hover:shadow-md transition flex flex-col"
          >
            {/* Book Image */}
            <div className="aspect-[2/3] overflow-hidden">
              <img
                src={book.image}
                alt={book.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info & Button */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg text-indigo-800 mb-1">{book.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{book.price}</p>
              <button
                onClick={() => handleAddToCart(book)}
                className="mt-auto flex items-center justify-center gap-2 text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 text-sm"
              >
                📚 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}