import React from 'react';
import { Link } from 'react-router';
import { Home, Search } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-black text-gray-200 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Không tìm thấy trang</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
      </p>
      <Link 
        to="/" 
        className="bg-[#FF6B00] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full flex items-center transition-colors"
      >
        <Home className="w-5 h-5 mr-2" />
        Về trang chủ
      </Link>
    </div>
  );
}
