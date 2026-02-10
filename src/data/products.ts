// Import actual product images
import kanchipuramSaree from "/product/kanchipuram silk saree.webp";
import banarasiSaree from "/product/banarasi silk saree.webp";
import cottonSaree from "/product/cotton handloom saree.jpg";
import terracottaDiyas from "/product/traditional terracotta diyas set.webp";
import terracottaPot from "/product/terracotta water pot.webp";
import terracottaVase from "/product/decorative terracotta vase.jpg";
import woodenToys from "/product/channapatna wooden toys set.webp";
import rockingHorse from "/product/woodem rocking horse.webp";
import woodenPuzzle from "/product/traditional wooden puzzle.jpg";
import brassThali from "/product/brass pooja thali set.webp";
import brassDiya from "/product/brass diya with stand.webp";
import brassIncense from "/product/brass incense holder.jpg";
import silkScarf from "/product/block printed silk scarf.jpg";
import cottonDupatta from "/product/cotton block print dupatta.webp";
import kalamkariStole from "/product/kalamkari print stole.jpg";
import handmadeJournal from "/product/handmade paper journal.jpg";
import leatherDiary from "/product/leather bound diary.webp";
import recycledNotebook from "/product/recycled paper notebook set.webp";
import juteTote from "/product/embroidered jute tote bag.webp";
import juteShopping from "/product/jute shopping bag.jpg";
import juteLunch from "/product/jute lunch bag.webp";
import clayPots from "/product/clay cooking pot set.webp";
import clayBottles from "/product/clay water bottle.jpg";
import earthenwareDinner from "/product/earthenware dinner set.webp";
import earthenwareDinnerAlt from "/product/earthenware dinner set.jpg";
import palmWallHanging from "/product/palm leaf wall hanging.webp";
import palmMats from "/product/palm leaf table mats.webp";
import paintedCoasters from "/product/hand painted coasters set.jpg";
import silverJewelry from "/product/tribal silver jewelry set.jpg";
import bambooLamp from "/product/bamboo table lamp.webp";

export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  category: string;
  image: string;
  description: string;
  artisan: string;
  featured?: boolean;
  rating?: number;
  reviews?: number;
}

export const products: Product[] = [
  // Handwoven Sarees
  { 
    id: 1, 
    name: "Kanchipuram Silk Saree - Royal Blue", 
    price: "₹6,800", 
    originalPrice: "₹8,500",
    category: "Handwoven Sarees", 
    image: kanchipuramSaree, 
    description: "Traditional silk saree with intricate gold border", 
    artisan: "Meera Devi", 
    featured: true,
    rating: 4.8,
    reviews: 24
  },
  { 
    id: 2, 
    name: "Banarasi Silk Saree - Emerald Green", 
    price: "₹5,200", 
    originalPrice: "₹6,800",
    category: "Handwoven Sarees", 
    image: banarasiSaree, 
    description: "Handwoven silk with traditional motifs", 
    artisan: "Priya Sharma",
    rating: 4.7,
    reviews: 18
  },
  { 
    id: 3, 
    name: "Cotton Handloom Saree - Pink", 
    price: "₹2,400", 
    originalPrice: "₹3,200",
    category: "Handwoven Sarees", 
    image: cottonSaree, 
    description: "Soft cotton saree with natural dyes", 
    artisan: "Kamala Devi",
    rating: 4.6,
    reviews: 12
  },
  
  // Terracotta Items
  { 
    id: 4, 
    name: "Traditional Terracotta Diyas Set", 
    price: "₹450", 
    originalPrice: "₹600",
    category: "Terracotta Items", 
    image: terracottaDiyas, 
    description: "Handcrafted oil lamps for festivals", 
    artisan: "Ravi Kumar", 
    featured: true,
    rating: 4.9,
    reviews: 32
  },
  { 
    id: 5, 
    name: "Terracotta Water Pot - Large", 
    price: "₹1,200", 
    originalPrice: "₹1,500",
    category: "Terracotta Items", 
    image: terracottaPot, 
    description: "Traditional water storage pot", 
    artisan: "Ravi Kumar",
    rating: 4.5,
    reviews: 15
  },
  { 
    id: 6, 
    name: "Decorative Terracotta Vase", 
    price: "₹800", 
    originalPrice: "₹1,000",
    category: "Terracotta Items", 
    image: terracottaVase, 
    description: "Beautiful vase with tribal patterns", 
    artisan: "Suresh Das",
    rating: 4.4,
    reviews: 8
  },
  
  // Wooden Toys
  { 
    id: 7, 
    name: "Channapatna Wooden Toys Set", 
    price: "₹950", 
    originalPrice: "₹1,200",
    category: "Wooden Toys", 
    image: woodenToys, 
    description: "Colorful traditional wooden toys", 
    artisan: "Lakshmi Bai", 
    featured: true,
    rating: 4.8,
    reviews: 28
  },
  { 
    id: 8, 
    name: "Wooden Rocking Horse", 
    price: "₹1,800", 
    originalPrice: "₹2,200",
    category: "Wooden Toys", 
    image: rockingHorse, 
    description: "Hand-carved rocking horse", 
    artisan: "Lakshmi Bai",
    rating: 4.7,
    reviews: 14
  },
  { 
    id: 9, 
    name: "Traditional Wooden Puzzle", 
    price: "₹600", 
    originalPrice: "₹800",
    category: "Wooden Toys", 
    image: woodenPuzzle, 
    description: "Educational wooden puzzle game", 
    artisan: "Suresh Chandra",
    rating: 4.6,
    reviews: 22
  },
  
  // Brass Puja Items
  { 
    id: 10, 
    name: "Brass Pooja Thali Set", 
    price: "₹2,200", 
    originalPrice: "₹2,800",
    category: "Brass Puja Items", 
    image: brassThali, 
    description: "Complete brass worship set", 
    artisan: "Arjun Sharma", 
    featured: true,
    rating: 4.9,
    reviews: 19
  },
  { 
    id: 11, 
    name: "Brass Diya with Stand", 
    price: "₹1,100", 
    originalPrice: "₹1,400",
    category: "Brass Puja Items", 
    image: brassDiya, 
    description: "Traditional brass lamp", 
    artisan: "Arjun Sharma",
    rating: 4.7,
    reviews: 16
  },
  { 
    id: 12, 
    name: "Brass Incense Holder", 
    price: "₹750", 
    originalPrice: "₹950",
    category: "Brass Puja Items", 
    image: brassIncense, 
    description: "Ornate incense stick holder", 
    artisan: "Arjun Sharma",
    rating: 4.5,
    reviews: 11
  },
  
  // Block-printed Scarves
  { 
    id: 13, 
    name: "Block Printed Silk Scarf - Blue", 
    price: "₹1,650", 
    originalPrice: "₹2,100",
    category: "Block-printed Scarves", 
    image: silkScarf, 
    description: "Hand block printed silk scarf", 
    artisan: "Priya Patel", 
    featured: true,
    rating: 4.8,
    reviews: 25
  },
  { 
    id: 14, 
    name: "Cotton Block Print Dupatta", 
    price: "₹900", 
    originalPrice: "₹1,200",
    category: "Block-printed Scarves", 
    image: cottonDupatta, 
    description: "Traditional block printed dupatta", 
    artisan: "Priya Sharma",
    rating: 4.6,
    reviews: 13
  },
  { 
    id: 15, 
    name: "Kalamkari Print Stole", 
    price: "₹1,200", 
    originalPrice: "₹1,500",
    category: "Block-printed Scarves", 
    image: kalamkariStole, 
    description: "Hand-painted Kalamkari stole", 
    artisan: "Priya Patel",
    rating: 4.7,
    reviews: 17
  },
  
  // Handmade Journals
  { 
    id: 16, 
    name: "Handmade Paper Journal - Large", 
    price: "₹800", 
    originalPrice: "₹1,000",
    category: "Handmade Journals", 
    image: handmadeJournal, 
    description: "Eco-friendly handmade paper journal", 
    artisan: "Suresh Das", 
    featured: true,
    rating: 4.5,
    reviews: 21
  },
  { 
    id: 17, 
    name: "Leather Bound Diary", 
    price: "₹1,200", 
    originalPrice: "₹1,500",
    category: "Handmade Journals", 
    image: leatherDiary, 
    description: "Traditional leather diary", 
    artisan: "Anita Devi",
    rating: 4.6,
    reviews: 9
  },
  { 
    id: 18, 
    name: "Recycled Paper Notebook Set", 
    price: "₹450", 
    originalPrice: "₹600",
    category: "Handmade Journals", 
    image: recycledNotebook, 
    description: "Set of eco-friendly notebooks", 
    artisan: "Suresh Das",
    rating: 4.4,
    reviews: 14
  },
  
  // Jute Bags
  { 
    id: 19, 
    name: "Embroidered Jute Tote Bag", 
    price: "₹650", 
    originalPrice: "₹850",
    category: "Jute Bags", 
    image: juteTote, 
    description: "Eco-friendly jute bag with embroidery", 
    artisan: "Kamala Devi",
    rating: 4.7,
    reviews: 26
  },
  { 
    id: 20, 
    name: "Jute Shopping Bag - Large", 
    price: "₹400", 
    originalPrice: "₹550",
    category: "Jute Bags", 
    image: juteShopping, 
    description: "Sturdy jute shopping bag", 
    artisan: "Priya Patel",
    rating: 4.5,
    reviews: 18
  },
  { 
    id: 21, 
    name: "Jute Lunch Bag", 
    price: "₹350", 
    originalPrice: "₹450",
    category: "Jute Bags", 
    image: juteLunch, 
    description: "Insulated jute lunch bag", 
    artisan: "Anita Devi",
    rating: 4.3,
    reviews: 12
  },
  
  // Clay Kitchenware
  { 
    id: 22, 
    name: "Clay Cooking Pot Set", 
    price: "₹1,800", 
    originalPrice: "₹2,300",
    category: "Clay Kitchenware", 
    image: clayPots, 
    description: "Traditional clay cooking pots", 
    artisan: "Ravi Kumar",
    rating: 4.8,
    reviews: 20
  },
  { 
    id: 23, 
    name: "Clay Water Bottles", 
    price: "₹600", 
    originalPrice: "₹800",
    category: "Clay Kitchenware", 
    image: clayBottles, 
    description: "Natural clay water bottles", 
    artisan: "Ravi Kumar",
    rating: 4.6,
    reviews: 15
  },
  { 
    id: 24, 
    name: "Earthenware Dinner Set", 
    price: "₹2,400", 
    originalPrice: "₹3,000",
    category: "Clay Kitchenware", 
    image: earthenwareDinner, 
    description: "Complete clay dinner set", 
    artisan: "Suresh Das",
    rating: 4.7,
    reviews: 11
  },
  
  // Palm Leaf Items
  { 
    id: 25, 
    name: "Palm Leaf Wall Hanging", 
    price: "₹900", 
    originalPrice: "₹1,200",
    category: "Palm Leaf Items", 
    image: palmWallHanging, 
    description: "Decorative palm leaf art", 
    artisan: "Anita Devi",
    rating: 4.5,
    reviews: 8
  },
  { 
    id: 26, 
    name: "Palm Leaf Table Mats", 
    price: "₹450", 
    originalPrice: "₹600",
    category: "Palm Leaf Items", 
    image: palmMats, 
    description: "Set of eco-friendly table mats", 
    artisan: "Suresh Chandra",
    rating: 4.4,
    reviews: 13
  },
  
  // Additional Items
  { 
    id: 27, 
    name: "Hand-painted Coasters Set", 
    price: "₹550", 
    originalPrice: "₹700",
    category: "Home Décor", 
    image: paintedCoasters, 
    description: "Wooden coasters with traditional art", 
    artisan: "Lakshmi Bai",
    rating: 4.6,
    reviews: 16
  },
  { 
    id: 28, 
    name: "Tribal Silver Jewelry Set", 
    price: "₹3,200", 
    originalPrice: "₹4,000",
    category: "Jewelry", 
    image: silverJewelry, 
    description: "Traditional tribal silver ornaments", 
    artisan: "Anita Devi",
    rating: 4.9,
    reviews: 7
  },
  { 
    id: 29, 
    name: "Bamboo Table Lamp", 
    price: "₹1,400", 
    originalPrice: "₹1,800",
    category: "Home Décor", 
    image: bambooLamp, 
    description: "Eco-friendly bamboo lamp", 
    artisan: "Anita Devi",
    rating: 4.7,
    reviews: 19
  },
  { 
    id: 30, 
    name: "Premium Earthenware Dinner Set", 
    price: "₹2,800", 
    originalPrice: "₹3,500",
    category: "Clay Kitchenware", 
    image: earthenwareDinnerAlt, 
    description: "Elegant clay dinner set with traditional finish", 
    artisan: "Suresh Das",
    rating: 4.8,
    reviews: 6
  }
];

export const categories = [
  "All Products",
  "Handwoven Sarees", 
  "Terracotta Items",
  "Wooden Toys",
  "Brass Puja Items", 
  "Block-printed Scarves",
  "Handmade Journals",
  "Jute Bags",
  "Clay Kitchenware",
  "Palm Leaf Items",
  "Home Décor",
  "Jewelry"
];