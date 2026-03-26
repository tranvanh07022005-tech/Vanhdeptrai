import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, ChevronDown, Star, ShoppingBag, X } from 'lucide-react';
import { productsDb } from '../data/products';

const categories = ["Tất cả", "Giày Thời Trang", "Giày Bóng Rổ", "Giày Chạy Bộ"];
const sortOptions = [
  { value: 'newest', label: 'Mới nhất' },
  { value: 'price_asc', label: 'Giá: Thấp đến Cao' },
  { value: 'price_desc', label: 'Giá: Cao đến Thấp' }
];

export function Catalog() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  
  useEffect(() => {
    // Check if category was passed through state from Categories component
    if (location.state && location.state.category) {
      if (categories.includes(location.state.category)) {
        setActiveCategory(location.state.category);
      }
    }
  }, [location.state]);

  const [sortBy, setSortBy] = useState("newest");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<number>(5000000);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...productsDb];

    // Filter by Category
    if (activeCategory !== "Tất cả") {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter by Price
    result = result.filter(p => p.priceValue <= priceRange);

    // Sort
    if (sortBy === 'price_asc') {
      result.sort((a, b) => a.priceValue - b.priceValue);
    } else if (sortBy === 'price_desc') {
      result.sort((a, b) => b.priceValue - a.priceValue);
    } else {
      // Newest (just ID descending as a mock)
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [activeCategory, sortBy, priceRange]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-200 pb-6">
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-2">Tất cả sản phẩm</h1>
            <p className="text-gray-500 font-medium">Khám phá bộ sưu tập {filteredAndSortedProducts.length} mẫu giày đỉnh cao.</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center gap-4 w-full md:w-auto">
            {/* Mobile Filter Toggle */}
            <button 
              onClick={() => setIsMobileFilterOpen(true)}
              className="md:hidden flex-1 bg-white border border-gray-200 text-gray-900 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2"
            >
              <Filter className="w-5 h-5" />
              Bộ lọc
            </button>

            {/* Sort Dropdown */}
            <div className="relative flex-1 md:w-64">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none w-full bg-white border border-gray-200 text-gray-900 font-bold py-3 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent cursor-pointer"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filters (Desktop) */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-28">
              
              <div className="mb-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4 uppercase tracking-wider">Danh mục</h3>
                <ul className="space-y-3">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => setActiveCategory(cat)}
                        className={`text-base font-medium transition-colors ${
                          activeCategory === cat ? 'text-[#FF6B00] font-bold' : 'text-gray-600 hover:text-black'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4 uppercase tracking-wider">Mức giá</h3>
                <div className="mb-2 flex justify-between text-sm font-bold text-gray-700">
                  <span>0₫</span>
                  <span>{formatPrice(priceRange)}</span>
                </div>
                <input 
                  type="range" 
                  min="500000" 
                  max="5000000" 
                  step="100000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
                />
              </div>

            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredAndSortedProducts.map((product) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      key={product.id}
                      className="group cursor-pointer bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      <Link to={`/san-pham/${product.id}`} className="block h-full flex flex-col">
                        <div className="relative bg-gray-50 rounded-2xl overflow-hidden aspect-square mb-4">
                          <img 
                            src={product.images[0]} 
                            alt={product.name} 
                            className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                          />
                          
                          {product.isNew && (
                            <div className="absolute top-3 left-3">
                              <span className="bg-[#FF6B00] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Mới</span>
                            </div>
                          )}
                          
                          <button 
                            className="absolute bottom-3 right-3 bg-white text-gray-900 p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#FF6B00] hover:text-white"
                            onClick={(e) => { e.preventDefault(); console.log('Thêm nhanh vào giỏ'); }}
                          >
                            <ShoppingBag className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="flex flex-col flex-grow">
                          <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wide">{product.category}</p>
                          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#FF6B00] transition-colors line-clamp-1">{product.name}</h3>
                          <div className="flex items-center gap-1 mb-3">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-gray-600 font-bold">{product.rating}</span>
                            <span className="text-xs text-gray-400">({product.reviews})</span>
                          </div>
                          
                          <div className="mt-auto pt-2 flex items-center justify-between">
                            <span className="text-xl font-black text-gray-900">{product.price}</span>
                            
                            {/* Color Dots */}
                            <div className="flex -space-x-1">
                              {product.colors.slice(0, 3).map((color, idx) => (
                                <span 
                                  key={idx}
                                  className="w-5 h-5 rounded-full border border-gray-300 shadow-sm"
                                  style={{ backgroundColor: color.hex }}
                                  title={color.name}
                                ></span>
                              ))}
                              {product.colors.length > 3 && (
                                <span className="w-5 h-5 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[8px] font-bold text-gray-600">
                                  +
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center shadow-sm">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Không tìm thấy sản phẩm</h3>
                <p className="text-gray-500 mb-6">Rất tiếc, không có sản phẩm nào phù hợp với bộ lọc của bạn.</p>
                <button 
                  onClick={() => {
                    setActiveCategory("Tất cả");
                    setPriceRange(5000000);
                  }}
                  className="bg-[#FF6B00] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
                >
                  Xóa bộ lọc
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-white z-50 p-6 shadow-2xl md:hidden overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                <h2 className="text-xl font-black text-gray-900 uppercase">Bộ lọc</h2>
                <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 text-gray-400 hover:text-black">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Danh mục</h3>
                <ul className="space-y-4">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => setActiveCategory(cat)}
                        className={`text-left w-full text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                          activeCategory === cat ? 'bg-[#FF6B00]/10 text-[#FF6B00] font-bold' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-10">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Mức giá</h3>
                <div className="mb-4 flex justify-between text-sm font-bold text-[#FF6B00]">
                  <span>0₫</span>
                  <span>{formatPrice(priceRange)}</span>
                </div>
                <input 
                  type="range" 
                  min="500000" 
                  max="5000000" 
                  step="100000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
                />
              </div>

              <button 
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full bg-black text-white font-bold py-4 rounded-xl"
              >
                Xem {filteredAndSortedProducts.length} kết quả
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
