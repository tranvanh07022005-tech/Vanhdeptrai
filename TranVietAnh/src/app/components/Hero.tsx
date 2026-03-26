import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function Hero() {
  return (
    <section id="trang-chu" className="pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 lg:pr-12 text-center lg:text-left z-10"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-tight mb-6">
              NÂNG TẦM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-400">PHONG CÁCH</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium">
              Khám phá bộ sưu tập giày thể thao mới nhất với thiết kế độc đáo và chất lượng đỉnh cao. Thể hiện cá tính riêng qua từng bước chân.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/san-pham/4" className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center group transition-all duration-300 transform hover:scale-105">
                Xem chi tiết
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 mt-12 lg:mt-0 relative"
          >
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-[#FF6B00] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1630497970569-21a3c838c543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvcmFuZ2UlMjBydW5uaW5nJTIwc2hvZXxlbnwxfHx8fDE3NzM4OTA4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Orange modern sneaker" 
              className="relative z-10 w-full h-auto object-cover rounded-3xl shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-700 ease-in-out"
            />
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
            >
              <div className="bg-[#FF6B00] text-white p-2 rounded-full">
                <span className="font-bold text-sm">Mới</span>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">Dòng sản phẩm</p>
                <p className="font-bold text-gray-900 text-lg">Aero X-Runner</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
