import React, { useState } from 'react';

const CartMenu = ({ cartItems, onRemoveFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleCart}
        className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700"
      >
        🛒 Cart ({cartItems.length})
      </button>

      {isOpen && (
        <div className="mt-2 bg-white shadow-xl rounded-lg p-4 w-72 max-h-96 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-2">Your Cart</h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Cart is empty.</p>
          ) : (
            <ul className="space-y-2">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-start border-b pb-2 text-sm"
                >
                  <div>
                    <p className="font-medium text-indigo-800">{item.name}</p>
                    <p className="text-gray-500">{item.price}</p>
                  </div>
                  <button
                    onClick={() => onRemoveFromCart(index)}
                    className="text-red-500 hover:underline text-xs"
                  >
                    ❌ Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default CartMenu;