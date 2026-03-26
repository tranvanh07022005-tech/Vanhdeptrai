import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      navigate('/san-pham');
      // In a real app, we would pass the query string to the catalog page
      // navigate(`/san-pham?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-black tracking-tighter uppercase">
              Sneaker<span className="text-[#FF6B00]">Station</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link to="/" className="text-gray-900 font-bold hover:text-[#FF6B00] transition-colors">
              Trang chủ
            </Link>
            <Link to="/san-pham" className="text-gray-900 font-bold hover:text-[#FF6B00] transition-colors">
              Sản phẩm
            </Link>
            <button 
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="text-gray-900 font-bold hover:text-[#FF6B00] transition-colors"
            >
              Liên hệ
            </button>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-900 hover:text-[#FF6B00] transition-colors"
            >
              <Search className="w-6 h-6" />
            </button>
            <Link to="/tai-khoan" className="text-gray-900 hover:text-[#FF6B00] transition-colors">
              <User className="w-6 h-6" />
            </Link>
            <Link to="/gio-hang" className="text-gray-900 hover:text-[#FF6B00] transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-900 hover:text-[#FF6B00] transition-colors"
            >
              <Search className="w-6 h-6" />
            </button>
            <Link to="/tai-khoan" className="text-gray-900 hover:text-[#FF6B00] transition-colors">
              <User className="w-6 h-6" />
            </Link>
            <Link to="/gio-hang" className="text-gray-900 hover:text-[#FF6B00] transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 hover:text-[#FF6B00] focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar Dropdown */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-sm overflow-hidden z-40"
            >
              <div className="max-w-3xl mx-auto p-4 sm:p-6">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Tìm kiếm giày sneaker..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-medium py-4 pl-12 pr-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all"
                    autoFocus
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <button type="submit" className="hidden">Tìm</button>
                </form>
                <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                  <span className="text-sm font-bold text-gray-500 flex-shrink-0 flex items-center">Gợi ý:</span>
                  {['Giày chạy bộ', 'Classic White', 'Bóng rổ', 'Chunky'].map((term) => (
                    <button 
                      key={term}
                      onClick={() => { setSearchQuery(term); document.querySelector('form')?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true })); }}
                      className="bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap hover:bg-gray-200 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-bold text-gray-900 hover:text-[#FF6B00]">Trang chủ</Link>
            <Link to="/san-pham" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-bold text-gray-900 hover:text-[#FF6B00]">Sản phẩm</Link>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
              }} 
              className="block w-full text-left px-3 py-2 text-base font-bold text-gray-900 hover:text-[#FF6B00]"
            >
              Liên hệ
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
