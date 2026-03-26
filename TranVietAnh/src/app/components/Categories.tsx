import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

const categories = [
  {
    name: "Giày Bóng Rổ",
    image: "https://images.unsplash.com/photo-1703968494490-5a474334e09d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwc2hvZXMlMjBvbiUyMGNvdXJ0fGVufDF8fHx8MTc3NDA4ODQ3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: "4 Sản phẩm"
  },
  {
    name: "Giày Thời Trang",
    image: "https://images.unsplash.com/photo-1580866506563-a2fe62b9646e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbGlmZXN0eWxlJTIwc25lYWtlciUyMG1vZGVsfGVufDF8fHx8MTc3Mzg5MDg2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    count: "3 Sản phẩm"
  },
  {
    name: "Giày Chạy Bộ",
    image: "https://images.unsplash.com/photo-1639843093167-ed40b985c01e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXMlMjBvbiUyMHRyYWNrJTIwYWN0aW9ufGVufDF8fHx8MTc3NDE0OTA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: "4 Sản phẩm"
  }
];

export function Categories() {
  return (
    <section id="bo-suu-tap" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Danh mục nổi bật</h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">Chọn lựa đa dạng cho mọi nhu cầu và phong cách của bạn.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative rounded-3xl overflow-hidden group aspect-[4/5] cursor-pointer"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-black text-white mb-2">{category.name}</h3>
                <p className="text-gray-300 font-medium mb-4">{category.count}</p>
                <Link 
                  to="/san-pham"
                  state={{ category: category.name }}
                  className="inline-block bg-white text-gray-900 font-bold py-2 px-6 rounded-full text-sm hover:bg-[#FF6B00] hover:text-white transition-colors duration-300"
                >
                  Khám phá
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
