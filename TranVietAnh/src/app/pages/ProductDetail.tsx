import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronRight, Truck, ShieldCheck, ArrowLeft, Heart, Share2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { productsDb } from '../data/products';

export function ProductDetail() {
  const { id } = useParams();
  const product = productsDb.find(p => p.id === Number(id)) || productsDb[0]; // Fallback to id 1

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(product.colors[0]?.name || null);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  // Reset states when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
    setSelectedSize(null);
    setSelectedColor(product.colors[0]?.name || null);
    setQuantity(1);
  }, [product.id]);

  const increaseQty = () => setQuantity(q => q + 1);
  const decreaseQty = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm font-medium text-gray-500 mb-8">
          <Link to="/" className="hover:text-[#FF6B00] transition-colors">Trang chủ</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to="/#san-pham" className="hover:text-[#FF6B00] transition-colors">Sản phẩm</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-900 font-bold">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square bg-gray-50 rounded-3xl overflow-hidden relative"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={product.images[activeImage]}
                  alt={`${product.name} - Góc nhìn ${activeImage + 1}`}
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </AnimatePresence>
            </motion.div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-200 bg-gray-50 ${
                    activeImage === idx ? 'border-[#FF6B00]' : 'border-transparent hover:border-gray-200'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover mix-blend-multiply" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8 border-b border-gray-100 pb-8">
              <span className="text-[#FF6B00] font-bold tracking-wider uppercase text-sm mb-3 block">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <span className="text-gray-500 font-medium">({product.reviews} đánh giá)</span>
              </div>
              <div className="text-3xl font-black text-gray-900">
                {product.price}
              </div>
            </div>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed font-medium">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>Màu sắc: <span className="text-gray-500 ml-1">{selectedColor}</span></span>
              </h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                      selectedColor === color.name ? 'border-[#FF6B00] scale-110' : 'border-transparent hover:scale-105'
                    }`}
                  >
                    <span 
                      className="w-8 h-8 rounded-full border border-gray-200 shadow-sm block"
                      style={{ backgroundColor: color.hex }}
                    ></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Kích cỡ (EU)</h3>
                <button className="text-[#FF6B00] text-sm font-bold hover:underline">Hướng dẫn chọn size</button>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-xl font-bold transition-all duration-200 ${
                      selectedSize === size
                        ? 'bg-black text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center justify-between bg-gray-100 rounded-full px-4 py-3 sm:w-32 flex-shrink-0">
                <button onClick={decreaseQty} className="text-gray-500 hover:text-black transition-colors p-1">
                  <Minus className="w-5 h-5" />
                </button>
                <span className="font-bold text-gray-900 text-lg w-8 text-center">{quantity}</span>
                <button onClick={increaseQty} className="text-gray-500 hover:text-black transition-colors p-1">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <button className="flex-grow bg-[#FF6B00] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Thêm vào giỏ ({product.price})
              </button>
              <div className="flex gap-2">
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 flex-shrink-0 ${
                    isLiked ? 'border-red-500 bg-red-50 text-red-500' : 'border-gray-200 bg-white text-gray-400 hover:border-black hover:text-black'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
                </button>
                <button className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-gray-200 bg-white text-gray-400 hover:border-black hover:text-black transition-all duration-300 flex-shrink-0">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="bg-orange-50 p-3 rounded-full text-[#FF6B00]">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Giao hàng miễn phí</h4>
                  <p className="text-gray-500 text-xs mt-1 font-medium">Cho đơn hàng trên 2.000.000₫</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-orange-50 p-3 rounded-full text-[#FF6B00]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Bảo hành 1 đổi 1</h4>
                  <p className="text-gray-500 text-xs mt-1 font-medium">Trong vòng 30 ngày đầu tiên</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
