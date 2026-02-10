export interface Artisan {
  id: number;
  name: string;
  craft: string;
  location: string;
  state: string;
  experience: number;
  bio: string;
  specialties: string[];
  avatar: string;
  coverImage: string;
  rating: number;
  totalProducts: number;
  totalSales: number;
  joinedDate: string;
  awards: string[];
  story: string;
  techniques: string[];
  materials: string[];
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
}

export const artisans: Artisan[] = [
  {
    id: 1,
    name: "Meera Devi",
    craft: "Handloom Weaving",
    location: "Kanchipuram",
    state: "Tamil Nadu",
    experience: 25,
    bio: "Master weaver specializing in traditional Kanchipuram silk sarees with intricate gold zari work.",
    specialties: ["Silk Sarees", "Zari Work", "Traditional Motifs"],
    avatar: "/product/kanchipuram silk saree.webp",
    coverImage: "/product/banarasi silk saree.webp",
    rating: 4.9,
    totalProducts: 45,
    totalSales: 1250,
    joinedDate: "2019-03-15",
    awards: ["National Handicrafts Award 2022", "Tamil Nadu State Craft Excellence Award"],
    story: "Born into a family of traditional weavers, Meera learned the art of silk weaving from her grandmother. She has been preserving the ancient techniques of Kanchipuram saree making for over two decades, training young women in her village to continue this beautiful tradition.",
    techniques: ["Traditional Handloom", "Zari Weaving", "Natural Dyeing"],
    materials: ["Pure Silk", "Gold Zari", "Silver Threads", "Natural Dyes"],
    socialMedia: {
      instagram: "@meera_silk_weaver",
      facebook: "MeeraSilkSarees"
    }
  },
  {
    id: 2,
    name: "Ravi Kumar",
    craft: "Terracotta Pottery",
    location: "Kumartuli",
    state: "West Bengal",
    experience: 18,
    bio: "Traditional potter creating beautiful terracotta items using age-old techniques passed down through generations.",
    specialties: ["Terracotta Diyas", "Water Pots", "Decorative Vases"],
    avatar: "/product/traditional terracotta diyas set.webp",
    coverImage: "/product/terracotta water pot.webp",
    rating: 4.8,
    totalProducts: 38,
    totalSales: 890,
    joinedDate: "2020-01-20",
    awards: ["Bengal Pottery Excellence Award 2021"],
    story: "Ravi comes from a long line of potters in Kumartuli, the famous potter's quarter of Kolkata. His family has been creating terracotta items for over 150 years. He combines traditional techniques with contemporary designs to create functional and decorative pieces.",
    techniques: ["Wheel Throwing", "Hand Building", "Traditional Firing"],
    materials: ["Local Clay", "Natural Glazes", "Organic Pigments"],
    socialMedia: {
      instagram: "@ravi_terracotta",
      youtube: "RaviPotteryStudio"
    }
  },
  {
    id: 3,
    name: "Lakshmi Bai",
    craft: "Wooden Toy Making",
    location: "Channapatna",
    state: "Karnataka",
    experience: 22,
    bio: "Expert in creating colorful Channapatna wooden toys using traditional lacquer work and natural dyes.",
    specialties: ["Wooden Toys", "Lacquer Work", "Educational Games"],
    avatar: "/product/channapatna wooden toys set.webp",
    coverImage: "/product/woodem rocking horse.webp",
    rating: 4.7,
    totalProducts: 52,
    totalSales: 1100,
    joinedDate: "2018-11-10",
    awards: ["Karnataka State Handicrafts Award 2020", "Channapatna Craft Excellence Award"],
    story: "Lakshmi learned the art of toy making from her father, who was also a renowned craftsman. She has innovated traditional designs to create educational toys that help children learn while playing, all while maintaining the authentic Channapatna style.",
    techniques: ["Wood Turning", "Lacquer Application", "Natural Coloring"],
    materials: ["Ivory Wood", "Natural Lacquer", "Vegetable Dyes", "Non-toxic Colors"],
    socialMedia: {
      instagram: "@lakshmi_toys",
      facebook: "ChannapatnaToysByLakshmi"
    }
  },
  {
    id: 4,
    name: "Arjun Sharma",
    craft: "Brass Work",
    location: "Moradabad",
    state: "Uttar Pradesh",
    experience: 30,
    bio: "Master craftsman specializing in traditional brass items for religious and decorative purposes.",
    specialties: ["Brass Puja Items", "Decorative Pieces", "Religious Artifacts"],
    avatar: "/product/brass pooja thali set.webp",
    coverImage: "/product/brass diya with stand.webp",
    rating: 4.9,
    totalProducts: 41,
    totalSales: 950,
    joinedDate: "2017-08-05",
    awards: ["National Metal Craft Award 2019", "UP State Artisan Excellence Award"],
    story: "Arjun represents the fourth generation of brass workers in his family. His workshop in Moradabad, known as the 'Brass City' of India, produces exquisite religious and decorative items that are cherished by families across the country.",
    techniques: ["Hand Hammering", "Engraving", "Traditional Polishing"],
    materials: ["Pure Brass", "Bronze", "Traditional Tools"],
    socialMedia: {
      facebook: "ArjunBrassWorks",
      youtube: "TraditionalBrassArt"
    }
  },
  {
    id: 5,
    name: "Priya Patel",
    craft: "Block Printing",
    location: "Bagru",
    state: "Rajasthan",
    experience: 15,
    bio: "Traditional block printing artist creating beautiful textiles using natural dyes and hand-carved wooden blocks.",
    specialties: ["Block Printing", "Natural Dyeing", "Textile Design"],
    avatar: "/product/block printed silk scarf.jpg",
    coverImage: "/product/cotton block print dupatta.webp",
    rating: 4.8,
    totalProducts: 47,
    totalSales: 1050,
    joinedDate: "2019-06-12",
    awards: ["Rajasthan Textile Heritage Award 2021"],
    story: "Priya learned block printing from the master craftsmen of Bagru village. She has revived several traditional patterns and techniques, creating contemporary designs while preserving the authentic methods of natural dyeing and hand printing.",
    techniques: ["Hand Block Printing", "Natural Dyeing", "Pattern Design"],
    materials: ["Cotton Fabric", "Silk", "Natural Dyes", "Wooden Blocks"],
    socialMedia: {
      instagram: "@priya_blockprints",
      facebook: "BagruBlockPrints"
    }
  },
  {
    id: 6,
    name: "Suresh Das",
    craft: "Paper Making & Clay Work",
    location: "Sanganer",
    state: "Rajasthan",
    experience: 20,
    bio: "Multi-skilled artisan specializing in handmade paper products and traditional clay kitchenware.",
    specialties: ["Handmade Paper", "Clay Kitchenware", "Eco-friendly Products"],
    avatar: "/product/handmade paper journal.jpg",
    coverImage: "/product/earthenware dinner set.webp",
    rating: 4.6,
    totalProducts: 43,
    totalSales: 780,
    joinedDate: "2018-04-18",
    awards: ["Eco-Craft Innovation Award 2020"],
    story: "Suresh is passionate about creating sustainable, eco-friendly products. He combines traditional paper making techniques with modern designs to create beautiful journals and stationery, while also crafting functional clay kitchenware.",
    techniques: ["Hand Paper Making", "Clay Molding", "Natural Finishing"],
    materials: ["Recycled Paper", "Natural Fibers", "Local Clay", "Organic Dyes"],
    socialMedia: {
      instagram: "@suresh_ecocraft"
    }
  },
  {
    id: 7,
    name: "Kamala Devi",
    craft: "Jute & Cotton Weaving",
    location: "Murshidabad",
    state: "West Bengal",
    experience: 16,
    bio: "Expert in creating eco-friendly jute and cotton products with beautiful embroidery and traditional patterns.",
    specialties: ["Jute Bags", "Cotton Textiles", "Embroidery Work"],
    avatar: "/product/embroidered jute tote bag.webp",
    coverImage: "/product/cotton handloom saree.jpg",
    rating: 4.7,
    totalProducts: 39,
    totalSales: 920,
    joinedDate: "2019-09-25",
    awards: ["Bengal Handicrafts Excellence Award 2022"],
    story: "Kamala leads a women's cooperative in her village, teaching traditional weaving and embroidery techniques. Her work not only preserves cultural heritage but also provides sustainable livelihoods for rural women.",
    techniques: ["Hand Weaving", "Embroidery", "Natural Dyeing"],
    materials: ["Jute Fiber", "Cotton", "Natural Threads", "Organic Dyes"],
    socialMedia: {
      facebook: "KamalaJuteWorks"
    }
  },
  {
    id: 8,
    name: "Suresh Chandra",
    craft: "Palm Leaf & Wood Craft",
    location: "Pipili",
    state: "Odisha",
    experience: 19,
    bio: "Traditional craftsman creating beautiful items from palm leaves and wood, specializing in functional and decorative pieces.",
    specialties: ["Palm Leaf Crafts", "Wooden Puzzles", "Traditional Games"],
    avatar: "/product/palm leaf wall hanging.webp",
    coverImage: "/product/traditional wooden puzzle.jpg",
    rating: 4.5,
    totalProducts: 35,
    totalSales: 650,
    joinedDate: "2018-12-08",
    awards: ["Odisha Traditional Craft Award 2021"],
    story: "Suresh learned palm leaf crafting from his grandfather and has been innovating traditional techniques to create contemporary designs. His work showcases the versatility of natural materials in creating beautiful, sustainable products.",
    techniques: ["Palm Leaf Weaving", "Wood Carving", "Natural Finishing"],
    materials: ["Palm Leaves", "Bamboo", "Local Wood", "Natural Fibers"],
    socialMedia: {
      instagram: "@suresh_palmcraft"
    }
  },
  {
    id: 9,
    name: "Anita Devi",
    craft: "Multi-Craft Artisan",
    location: "Jaipur",
    state: "Rajasthan",
    experience: 24,
    bio: "Versatile artisan skilled in multiple traditional crafts including jewelry making, leather work, and bamboo crafts.",
    specialties: ["Silver Jewelry", "Leather Crafts", "Bamboo Products"],
    avatar: "/product/tribal silver jewelry set.jpg",
    coverImage: "/product/bamboo table lamp.webp",
    rating: 4.8,
    totalProducts: 48,
    totalSales: 1180,
    joinedDate: "2017-02-14",
    awards: ["Rajasthan Multi-Craft Excellence Award 2020", "National Women Artisan Award 2022"],
    story: "Anita is a master of multiple traditional crafts, having learned from various artisan communities across Rajasthan. She runs a training center where she teaches young women diverse craft skills, helping preserve multiple traditional art forms.",
    techniques: ["Silver Smithing", "Leather Tooling", "Bamboo Weaving", "Traditional Jewelry Making"],
    materials: ["Silver", "Leather", "Bamboo", "Semi-precious Stones", "Natural Dyes"],
    socialMedia: {
      instagram: "@anita_multicraft",
      facebook: "AnitaTraditionalCrafts",
      youtube: "AnitaCraftStudio"
    }
  }
];

// Helper function to get artisan by ID
export const getArtisanById = (id: number): Artisan | undefined => {
  return artisans.find(artisan => artisan.id === id);
};

// Helper function to get products by artisan
// Helper function to get artisan ID by name
export const getArtisanIdByName = (name: string): number | undefined => {
  const artisan = artisans.find(a => a.name === name);
  return artisan?.id;
};