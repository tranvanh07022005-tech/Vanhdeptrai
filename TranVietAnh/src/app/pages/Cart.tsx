import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag, ShieldCheck, Tag } from 'lucide-react';
import { productsDb } from '../data/products';

// Mock dữ liệu giỏ hàng ban đầu
const initialCart: Array<any> = [];

export function Cart() {
  const [cartItems, setCartItems] = useState(initialCart);
  const [promoCode, setPromoCode] = useState('');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateQuantity = (cartId: string, delta: number) => {
    setCartItems(items =>
      items.map(item => {
        if (item.cartId === cartId) {
          const newQuantity = item.quantity + delta;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      })
    );
  };

  const removeItem = (cartId: string) => {
    setCartItems(items => items.filter(item => item.cartId !== cartId));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.priceValue * item.quantity, 0);
  const shipping = subtotal > 2000000 ? 0 : 50000;
  const total = subtotal + shipping;

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tiêu đề trang */}
        <div className="mb-10">
          <Link to="/san-pham" className="inline-flex items-center text-gray-500 hover:text-[#FF6B00] font-medium mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tiếp tục mua sắm
          </Link>
          <h1 className="text-4xl font-black text-gray-900">Giỏ hàng của bạn</h1>
          <p className="text-gray-500 font-medium mt-2">
            {cartItems.length > 0 
              ? `Bạn đang có ${cartItems.length} sản phẩm trong giỏ hàng.` 
              : 'Giỏ hàng của bạn đang trống.'}
          </p>
        </div>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Danh sách sản phẩm */}
            <div className="flex-1">
              <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
                <div className="p-6 sm:p-8 space-y-8">
                  <AnimatePresence>
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.cartId}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95, height: 0, marginTop: 0, marginBottom: 0, overflow: 'hidden' }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col sm:flex-row gap-6 border-b border-gray-100 last:border-0 pb-8 last:pb-0"
                      >
                        {/* Ảnh sản phẩm */}
                        <Link to={`/san-pham/${item.product.id}`} className="w-full sm:w-32 h-32 bg-gray-50 rounded-2xl flex-shrink-0 overflow-hidden block group">
                          <img 
                            src={item.product.images[0]} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                          />
                        </Link>

                        {/* Thông tin */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                                {item.product.category}
                              </p>
                              <Link to={`/san-pham/${item.product.id}`} className="text-lg font-bold text-gray-900 hover:text-[#FF6B00] transition-colors line-clamp-2 mb-2">
                                {item.product.name}
                              </Link>
                              <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                                <span className="flex items-center gap-1">
                                  Phân loại: <strong className="text-gray-900">{item.color}</strong>
                                </span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <span>Size: <strong className="text-gray-900">{item.size}</strong></span>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-lg font-black text-gray-900 block">
                                {formatPrice(item.product.priceValue)}
                              </span>
                            </div>
                          </div>

                          <div className="flex justify-between items-end mt-4">
                            {/* Nút tăng giảm số lượng */}
                            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5">
                              <button 
                                onClick={() => updateQuantity(item.cartId, -1)}
                                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-8 text-center font-bold text-gray-900 text-sm">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => updateQuantity(item.cartId, 1)}
                                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Nút xóa */}
                            <button 
                              onClick={() => removeItem(item.cartId)}
                              className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-medium p-2"
                            >
                              <Trash2 className="w-4 h-4" />
                              <span className="hidden sm:inline">Xóa</span>
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Tóm tắt đơn hàng */}
            <div className="w-full lg:w-[400px] flex-shrink-0">
              <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 sticky top-28">
                <h2 className="text-xl font-black text-gray-900 mb-6">Tóm tắt đơn hàng</h2>
                
                <div className="space-y-4 text-sm font-medium text-gray-600 mb-6 border-b border-gray-100 pb-6">
                  <div className="flex justify-between">
                    <span>Tạm tính</span>
                    <span className="text-gray-900 font-bold">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phí giao hàng</span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-bold">Miễn phí</span>
                    ) : (
                      <span className="text-gray-900 font-bold">{formatPrice(shipping)}</span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-end mb-8">
                  <span className="text-base font-bold text-gray-900">Tổng cộng</span>
                  <div className="text-right">
                    <span className="text-3xl font-black text-[#FF6B00] block">{formatPrice(total)}</span>
                    <span className="text-xs text-gray-500 font-medium">(Đã bao gồm VAT)</span>
                  </div>
                </div>

                {/* Mã giảm giá */}
                <div className="mb-6">
                  <div className="flex bg-gray-50 rounded-xl overflow-hidden border border-gray-200 focus-within:border-[#FF6B00] focus-within:ring-1 focus-within:ring-[#FF6B00] transition-all">
                    <div className="pl-4 flex items-center justify-center text-gray-400">
                      <Tag className="w-5 h-5" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Mã giảm giá" 
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full bg-transparent border-none focus:outline-none py-3 px-3 text-gray-900 font-medium"
                    />
                    <button className="bg-black text-white px-6 font-bold hover:bg-gray-800 transition-colors">
                      Áp dụng
                    </button>
                  </div>
                </div>

                <button className="w-full bg-[#FF6B00] hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50">
                  Tiến hành thanh toán
                </button>

                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                  Thanh toán bảo mật & An toàn
                </div>
              </div>
            </div>

          </div>
        ) : (
          /* Trạng thái giỏ hàng trống */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-sm p-12 text-center max-w-2xl mx-auto"
          >
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-gray-300" />
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Giỏ hàng trống</h2>
            <p className="text-gray-500 mb-8 font-medium text-lg">
              Có vẻ như bạn chưa chọn sản phẩm nào. Hãy khám phá những mẫu sneaker tuyệt vời của chúng tôi nhé!
            </p>
            <Link 
              to="/san-pham"
              className="inline-flex items-center justify-center bg-[#FF6B00] hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
            >
              Khám phá sản phẩm ngay
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}