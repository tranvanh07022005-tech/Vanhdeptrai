export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  priceValue: number;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  images: string[];
  sizes: number[];
  colors: ProductColor[];
  isNew?: boolean;
}

export const productsDb: Product[] = [
  {
    id: 1,
    name: "Classic Minimal White",
    price: "2.500.000₫",
    priceValue: 2500000,
    description: "Phiên bản Classic Minimal White mang đến sự tinh tế vượt thời gian. Thiết kế tối giản, dễ dàng phối hợp với mọi trang phục, cùng chất liệu da cao cấp đảm bảo sự bền bỉ và êm ái tối đa trong từng bước đi.",
    category: "Giày Thời Trang",
    rating: 4.8,
    reviews: 124,
    isNew: true,
    images: [
      "https://images.unsplash.com/photo-1625860191460-10a66c7384fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG1pbmltYWwlMjBzbmVha2VyJTIwaGlnaCUyMHF1YWxpdHl8ZW58MXx8fHwxNzczODkwODY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1670083947762-bb8efa0297a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VyJTIwc2lkZSUyMHZpZXclMjBpc29sYXRlZHxlbnwxfHx8fDE3NzM5NzU2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1673713527412-d27800695bfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VyJTIwdG9wJTIwdmlld3xlbnwxfHx8fDE3NzM5NzU2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1771845222440-d7c86ad49883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VyJTIwdGV4dHVyZSUyMGRldGFpbHxlbnwxfHx8fDE3NzM5NzU2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    sizes: [38, 39, 40, 41, 42, 43],
    colors: [
      { name: "Trắng", hex: "#FFFFFF" },
      { name: "Đen", hex: "#000000" }
    ]
  },
  {
    id: 2,
    name: "Urban Street Black",
    price: "3.200.000₫",
    priceValue: 3200000,
    description: "Urban Street Black sinh ra dành cho đường phố. Với phong cách bụi bặm, đế chunky hầm hố và đệm lót êm ái, đôi giày này không chỉ là một phụ kiện thời trang mà còn là người bạn đồng hành tin cậy trên mọi nẻo đường.",
    category: "Giày Thể Thao",
    rating: 5.0,
    reviews: 89,
    isNew: true,
    images: [
      "https://images.unsplash.com/photo-1767684807239-56bf9d81be4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHVyYmFuJTIwc3RyZWV0d2VhciUyMHNuZWFrZXJ8ZW58MXx8fHwxNzczODkwODY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1670083947762-bb8efa0297a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VyJTIwc2lkZSUyMHZpZXclMjBpc29sYXRlZHxlbnwxfHx8fDE3NzM5NzU2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    sizes: [39, 40, 41, 42, 43, 44],
    colors: [
      { name: "Đen", hex: "#000000" },
      { name: "Xám", hex: "#6B7280" }
    ]
  },
  {
    id: 3,
    name: "Pro Court Master",
    price: "4.500.000₫",
    priceValue: 4500000,
    description: "Được thiết kế đặc biệt cho mặt sân bóng rổ, Pro Court Master cung cấp độ bám sân tuyệt đối, hỗ trợ bật nhảy tối đa và bảo vệ cổ chân hoàn hảo. Sẵn sàng bùng nổ trong mọi trận đấu.",
    category: "Giày Bóng Rổ",
    rating: 4.9,
    reviews: 215,
    isNew: true,
    images: [
      "https://images.unsplash.com/photo-1733744578070-4be2c11fbe84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJhc2tldGJhbGwlMjBzaG9lJTIwYWN0aW9ufGVufDF8fHx8MTc3Mzg5MDg2OXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1673713527412-d27800695bfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VyJTIwdG9wJTIwdmlld3xlbnwxfHx8fDE3NzM5NzU2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    sizes: [40, 41, 42, 43, 44, 45],
    colors: [
      { name: "Cam", hex: "#FF6B00" },
      { name: "Xanh dương", hex: "#3B82F6" },
      { name: "Đen", hex: "#000000" }
    ]
  },
  {
    id: 4,
    name: "Aero Runner Red",
    price: "2.800.000₫",
    priceValue: 2800000,
    description: "Trọng lượng siêu nhẹ kết hợp cùng bộ đệm phản hồi lực cực tốt. Aero Runner Red giúp bạn chinh phục mọi cự ly với tốc độ vượt trội và phong cách nổi bật.",
    category: "Giày Chạy Bộ",
    rating: 4.7,
    reviews: 95,
    images: [
      "https://images.unsplash.com/photo-1767440557855-79d85bd685ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBhdGhsZXRpYyUyMHNuZWFrZXJ8ZW58MXx8fHwxNzczOTc1ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: [
      { name: "Đỏ", hex: "#EF4444" },
      { name: "Đen", hex: "#000000" }
    ]
  },
  {
    id: 5,
    name: "Ocean Breeze Jogger",
    price: "2.200.000₫",
    priceValue: 2200000,
    description: "Sự thoải mái tối đa cho việc tập luyện hàng ngày. Ocean Breeze Jogger mang đến cảm giác mát mẻ nhờ công nghệ lưới thoáng khí vượt trội.",
    category: "Giày Chạy Bộ",
    rating: 4.5,
    reviews: 62,
    images: [
      "https://images.unsplash.com/photo-1584125073721-71adc0702886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwcnVubmluZyUyMHNob2V8ZW58MXx8fHwxNzczOTc1ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    sizes: [36, 37, 38, 39, 40, 41],
    colors: [
      { name: "Xanh dương", hex: "#3B82F6" },
      { name: "Trắng", hex: "#FFFFFF" }
    ]
  },
  {
    id: 6,
    name: "Urban Explorer Grey",
    price: "2.650.000₫",
    priceValue: 2650000,
    description: "Dành cho những người yêu thích sự xê dịch nhưng vẫn muốn giữ nét thanh lịch. Form giày ôm chân, màu xám trung tính dễ dàng mix&match.",
    category: "Giày Thời Trang",
    rating: 4.6,
    reviews: 110,
    images: [
      "https://images.unsplash.com/photo-1646869623523-2120987bbd79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmV5JTIwY2FzdWFsJTIwc25lYWtlcnxlbnwxfHx8fDE3NzM5NzU4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    sizes: [39, 40, 41, 42, 43],
    colors: [
      { name: "Xám", hex: "#9CA3AF" },
      { name: "Trắng", hex: "#FFFFFF" }
    ]
  },
  {
    id: 7,
    name: "Sunshine Flex",
    price: "3.500.000₫",
    priceValue: 3500000,
    description: "Toả sáng rực rỡ với Sunshine Flex. Phiên bản đặc biệt giới hạn với sắc vàng chanh bắt mắt, chất liệu cao cấp và kiểu dáng hiện đại cá tính.",
    category: "Giày Thời Trang",
    rating: 4.9,
    reviews: 145,
    images: [
      "https://images.unsplash.com/photo-1771049873881-45b23a2e9847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjBmYXNoaW9uJTIwc25lYWtlcnxlbnwxfHx8fDE3NzM5NzU4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    sizes: [37, 38, 39, 40, 41],
    colors: [
      { name: "Vàng", hex: "#EAB308" }
    ]
  }
];
