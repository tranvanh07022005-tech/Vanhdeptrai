import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Package, MapPin, Heart, LogOut, Camera, Edit2 } from 'lucide-react';

export function Profile() {
  const [activeTab, setActiveTab] = useState('info');

  const tabs = [
    { id: 'info', label: 'Thông tin cá nhân', icon: User },
    { id: 'orders', label: 'Đơn hàng của tôi', icon: Package },
    { id: 'addresses', label: 'Sổ địa chỉ', icon: MapPin },
    { id: 'wishlist', label: 'Sản phẩm yêu thích', icon: Heart },
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900">Tài khoản của tôi</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-3xl shadow-sm p-6 mb-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-md flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-400" />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-[#FF6B00] text-white p-1.5 rounded-full shadow-lg border-2 border-white hover:bg-orange-600 transition-colors">
                    <Camera className="w-3 h-3" />
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Chưa cập nhật</h3>
                  <p className="text-sm text-gray-500 font-medium">Thành viên Mới</p>
                </div>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all duration-200 ${
                        isActive 
                          ? 'bg-[#FF6B00]/10 text-[#FF6B00]' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-red-500 hover:bg-red-50 transition-all duration-200">
                  <LogOut className="w-5 h-5" />
                  Đăng xuất
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 min-h-[500px]">
              
              {activeTab === 'info' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-black text-gray-900">Hồ sơ cá nhân</h2>
                    <button className="text-[#FF6B00] font-bold flex items-center gap-2 hover:bg-orange-50 px-4 py-2 rounded-lg transition-colors">
                      <Edit2 className="w-4 h-4" />
                      Chỉnh sửa
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">Họ và tên</label>
                        <p className="text-lg font-bold text-gray-400 bg-gray-50 px-4 py-3 rounded-xl italic">Chưa cập nhật</p>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">Số điện thoại</label>
                        <p className="text-lg font-bold text-gray-400 bg-gray-50 px-4 py-3 rounded-xl italic">Chưa cập nhật</p>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">Giới tính</label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="gender" className="accent-[#FF6B00] w-4 h-4" />
                            <span className="font-medium text-gray-900">Nam</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="gender" className="accent-[#FF6B00] w-4 h-4" />
                            <span className="font-medium text-gray-900">Nữ</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">Email</label>
                        <p className="text-lg font-bold text-gray-400 bg-gray-50 px-4 py-3 rounded-xl italic">Chưa cập nhật</p>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">Ngày sinh</label>
                        <p className="text-lg font-bold text-gray-400 bg-gray-50 px-4 py-3 rounded-xl italic">Chưa cập nhật</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'orders' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center h-full text-center py-12"
                >
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                    <Package className="w-10 h-10 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Chưa có đơn hàng nào</h3>
                  <p className="text-gray-500 mb-6">Bạn chưa thực hiện bất kỳ đơn hàng nào gần đây.</p>
                </motion.div>
              )}

              {activeTab === 'addresses' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-black text-gray-900">Sổ địa chỉ</h2>
                    <button className="bg-black text-white font-bold px-5 py-2.5 rounded-xl hover:bg-gray-800 transition-colors">
                      + Thêm địa chỉ mới
                    </button>
                  </div>
                  
                  <div className="border border-dashed border-gray-300 rounded-2xl p-10 text-center flex flex-col items-center justify-center">
                    <MapPin className="w-10 h-10 text-gray-300 mb-4" />
                    <p className="text-gray-500 font-medium mb-4">Bạn chưa thêm địa chỉ nào.</p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'wishlist' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center h-full text-center py-12"
                >
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                    <Heart className="w-10 h-10 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Danh sách yêu thích trống</h3>
                  <p className="text-gray-500 mb-6">Hãy thả tim cho những sản phẩm bạn yêu thích nhé.</p>
                </motion.div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}