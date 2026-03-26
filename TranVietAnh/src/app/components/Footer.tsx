import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer id="lien-he" className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="text-2xl font-black tracking-tighter uppercase inline-block mb-6">
              Sneaker<span className="text-[#FF6B00]">Station</span>
            </a>
            <p className="text-gray-400 font-medium mb-6">
              Điểm đến lý tưởng cho những tín đồ yêu giày thể thao. Chúng tôi cam kết mang đến những sản phẩm chất lượng nhất.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF6B00] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF6B00] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF6B00] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Khám phá</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sản phẩm mới</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Thương hiệu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Hỗ trợ</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Chính sách đổi trả</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hướng dẫn chọn size</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Phương thức thanh toán</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Theo dõi đơn hàng</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-[#FF6B00] flex-shrink-0" />
                <span>123 Đường Bùi Thị Xuân, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 text-[#FF6B00] flex-shrink-0" />
                <span>0123 456 789</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 text-[#FF6B00] flex-shrink-0" />
                <span>hello@sneakerstation.vn</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Sneaker Station. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
