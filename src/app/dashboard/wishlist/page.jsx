'use client'
import Image from 'next/image';
import { FiHeart, FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import { StoreContext } from '../../context';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { products } from "../../libs/Data.js";


const Wishlist = () => {
    const { wishlistData, setWishlistData } = useContext(StoreContext);
    const handleRemoveWishlist = (productId) => {
        setWishlistData(prev => prev.filter(id => id !== productId));
        toast("Remove from wishlist Successfully")
    }

    const wishlistItems = products.filter(product => wishlistData.includes(product.id));    


  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Wishlist</h1>
        <p className="text-gray-600 mt-2">Items you&apos;ve saved for later</p>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12">
          <FiHeart className="w-24 h-24 text-gray-300 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-500">Start adding items you love to your wishlist!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={item.photo}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <button onClick={() => handleRemoveWishlist(item.id)} className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-red-50">
                  <FiTrash2 className="text-red-500" size={20} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-green-600">{item.category}</span>
                  <span className={`text-sm font-medium ${item.inStock ? 'text-green-600' : 'text-red-500'}`}>
                    {item.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-xl font-bold text-gray-900 mb-4">{item.price}</p>
                
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    <FiShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
