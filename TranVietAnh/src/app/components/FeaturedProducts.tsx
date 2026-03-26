import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router';
import { productsDb } from '../data/products';

export function FeaturedProducts() {
  // Chỉ lấy 3 sản phẩm nổi bật đầu tiên
  const products = productsDb.slice(0, 3);

  return (
    <section id="san-pham" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-100 pb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Sản phẩm mới nhất</h2>
            <p className="text-gray-500 font-medium">Những mẫu giày đang được săn đón nhiều nhất.</p>
          </div>
          <Link to="/san-pham" className="hidden md:inline-flex text-gray-900 font-bold hover:text-[#FF6B00] transition-colors items-center">
            Xem tất cả <span className="ml-2">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer block"
            >
              <Link to={`/san-pham/${product.id}`} className="block">
                <div className="relative bg-gray-50 rounded-2xl overflow-hidden aspect-square mb-6">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay UI */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Mới</span>
                  </div>
                  
                  <button className="absolute bottom-4 right-4 bg-white text-gray-900 p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#FF6B00] hover:text-white"
                          onClick={(e) => { e.preventDefault(); /* Prevent link click */ console.log('Add to cart') }}>
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>

                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-1">{product.category}</p>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#FF6B00] transition-colors">{product.name}</h3>
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm text-gray-600 ml-1 font-bold">5.0</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 font-medium">Giá bán:</span>
                    <span className="text-lg font-black text-gray-900">{product.price}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link to="/san-pham" className="inline-block bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded-full w-full">
            Xem tất cả
          </Link>
        </div>
      </div>
    </section>
  );
}
