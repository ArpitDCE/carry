export const navBarEntery=["Furniture","Clothes","Shoes","Books","Pets","Ohters","About","Contact"]

//product list
export interface ProductListProps{
    image:string;
    name:string;
    location:string;
    chat:boolean;
    setChat:(value:boolean)=>void;
}
export interface ChatProps{
  setChat:(value:boolean)=>void;
}

export const allProduct=[
    {
        image: "https://www.woodenstreet.com/images/product/henry-3-seater-sofa-leatherette-ginger-bread.webp",
        name: "Henry 3 Seater Sofa",
        location: "India, Gurugram, Khetawas"
    },
    {
        image: "https://www.1stdibs.com/images/anglo-indian-teak-padouk-center-dining-table.webp",
        name: "Anglo-Indian Teak and Padouk Center/Dining Table",
        location: "India, Mumbai, Colaba"
    },
    {
        image: "https://www.siamsawadee.com/images/wooden-hand-carved-chair-indian-design.webp",
        name: "Wooden Hand Carved Chair",
        location: "India, Jaipur, Amer"
    },
    {
        image: "https://www.woodenstreet.com/images/adolph-bed-with-storage-queen-size-honey-finish.webp",
        name: "Adolph Bed With Side Storage",
        location: "India, Bengaluru, Whitefield"
    },
    {
        image: "https://www.woodenstreet.com/images/celestin-4-door-wardrobe-with-dresser-exotic-teak-finish.webp",
        name: "Celestin Four Door Wardrobe with Dressing Table",
        location: "India, Pune, Koregaon Park"
    },
    {
        image: "https://www.woodenstreet.com/henry-3-seater-sofa-leather-ginger-bread",
        name: "Henry 3 Seater Sofa",
        location: "India, Gurugram, Khetawas"
    },
    {
        image: "https://www.1stdibs.com/furniture/tables/dining-room-tables/anglo-indian-teak-padouk-center-dining-table/id-f_956802/",
        name: "Anglo-Indian Teak and Padouk Center/Dining Table",
        location: "India, Mumbai, Colaba"
    },
    {
        image: "https://www.siamsawadee.com/product/wooden-hand-carved-chair-hand-made-indian-design/",
        name: "Wooden Hand Carved Chair",
        location: "India, Jaipur, Amer"
    },
    {
        image: "https://www.woodenstreet.com/adolph-bed-with-storage-queen-size-honey-finish",
        name: "Adolph Bed With Side Storage",
        location: "India, Bengaluru, Whitefield"
    },
    {
        image: "https://www.woodenstreet.com/celestin-4-door-wardrobe-with-dresser-exotic-teak-finish",
        name: "Celestin Four Door Wardrobe with Dressing Table",
        location: "India, Pune, Koregaon Park"
    },
    {
      image: "https://kashmirartsgallery.com/products/KAG-186",
      name: "KAG 186",
      location: "India, Jammu and Kashmir, Srinagar"
    },
    {
      image: "https://kashmirartsgallery.com/products/KAG-101",
      name: "KAG 101",
      location: "India, Jammu and Kashmir, Srinagar"
    },
    {
      image: "https://kashmirartsgallery.com/products/KAG-102",
      name: "KAG 102",
      location: "India, Jammu and Kashmir, Srinagar"
    },
    {
      image: "https://kashmirartsgallery.com/products/KAG-103",
      name: "KAG 103",
      location: "India, Jammu and Kashmir, Srinagar"
    },
    {
      image: "https://kashmirartsgallery.com/products/KAG-104",
      name: "KAG 104",
      location: "India, Jammu and Kashmir, Srinagar"
    },
    {
      image: "https://kashmirartsgallery.com/products/KAG-105",
      name: "KAG 105",
      location: "India, Jammu and Kashmir, Srinagar"
    },
    {
      image: "https://kashmirartsgallery.com/products/KAG-106",
      name: "KAG 106",
      location: "India, Jammu and Kashmir, Srinagar"
    },
    {
      image: "https://kashmirartsgallery.com/products/KAG-107",
      name: "KAG 107",
      location: "India, Jammu and Kashmir, Srinagar"
    },
    {
      image: "https://kashmirartsgallery.com/products/KAG-108",
      name: "KAG 108",
      location: "India, Jammu and Kashmir, Srinagar"
    },
    {
      image: "https://kashmirartsgallery.com/products/KAG-109",
      name: "KAG 109",
      location: "India, Jammu and Kashmir, Srinagar"
    },
    {
      image: "https://kashmirartsgallery.com/products/KAG-110",
      name: "KAG 110",
      location: "India, Jammu and Kashmir, Srinagar"
    },
    {
      image: "https://kashmirartsgallery.com/products/KAG-111",
      name: "KAG 111",
      location: "India, Jammu and Kashmir, Srinagar"
    },
    {
      image: "https://www.architecturaldigest.in/content/ads-guide-to-antiques-around-the-country/royale-treasures",
      name: "Royale Treasures Collection",
      location: "India, Maharashtra, Alibag"
    },
    {
      image: "https://www.architecturaldigest.in/content/ads-guide-to-antiques-around-the-country/danny-mehras-carpets",
      name: "Danny Mehra's Antique Carpets",
      location: "India, Karnataka, Bengaluru"
    },
    {
      image: "https://www.architecturaldigest.in/content/ads-guide-to-antiques-around-the-country/accurate-demolisher",
      name: "Accurate Demolisher Antiques",
      location: "India, Karnataka, Bengaluru"
    },
    {
      image: "https://www.architecturaldigest.in/content/ads-guide-to-antiques-around-the-country/balajis-antiques-and-collectibles",
      name: "Balaji's Antiques and Collectibles",
      location: "India, Karnataka, Bengaluru"
    },
    {
      image: "https://www.architecturaldigest.in/content/ads-guide-to-antiques-around-the-country/ramanik-k-shah",
      name: "Ramanik K Shah Furniture",
      location: "India, Gujarat, Bhuj"
    },
    {
      image: "https://homecare24.id/traditional-indian-low-seating-furniture",
      name: "Traditional Indian Low Seating Furniture",
      location: "India, Kerala, Kochi"
    },
    {
      image: "https://www.irisfurnishing.com/indian-furniture/painted/green-and-yellow-pankhuri-sideboard",
      name: "Green and Yellow Pankhuri Sideboard",
      location: "India, West Bengal, Kolkata"
    },
    {
      image: "https://www.irisfurnishing.com/indian-furniture/painted/charcoal-painted-one-drawer-bedside-table",
      name: "Charcoal Painted One Drawer Bedside Table",
      location: "India, West Bengal, Kolkata"
    },
    {
      image: "https://www.irisfurnishing.com/indian-furniture/painted/smokey-blue-sideboard-with-embossed-metal-doors",
      name: "Smokey Blue Sideboard with Embossed Metal Doors",
      location: "India, West Bengal, Kolkata"
    },
    {
      image: "https://www.irisfurnishing.com/indian-furniture/painted/carved-and-painted-ghora-storage-bench",
      name: "Carved and Painted Ghora Storage Bench",
      location: "India, West Bengal, Kolkata"
    },
    {
      image: "https://www.irisfurnishing.com/indian-furniture/cabinets/red-bird-panel-cupboard-black-trim",
      name: "Red Bird Panel Cupboard (Black Trim)",
      location: "India, West Bengal, Kolkata"
    },
    {
      image: "https://www.irisfurnishing.com/indian-furniture/clearance/green-vine-panel-wardrobe",
      name: "Green Vine Panel Wardrobe",
      location: "India, West Bengal, Kolkata"
    },
    {
      image: "https://www.irisfurnishing.com/indian-furniture/cabinets/carved-mango-wood-cupboard",
      name: "Carved Mango Wood Cupboard",
      location: "India, West Bengal, Kolkata"
    },
    {
      image: "https://www.irisfurnishing.com/indian-furniture/painted/painted-blue-star-sideboard",
      name: "Painted Blue Star Sideboard",
      location: "India, West Bengal, Kolkata"
    },
    {
      image: "https://www.irisfurnishing.com/indian-furniture/indian-furniture/purple-floral-wardrobe",
      name: "Purple Floral Wardrobe",
      location: "India, West Bengal, Kolkata"
    },
    {
      image: "https://www.irisfurnishing.com/indian-furniture/cupboards/solid-teak-rajasthani-brass-rivet-almirah",
      name: "Solid Teak Rajasthani Brass Rivet Almirah",
      location: "India, West Bengal, Kolkata"
    },
]
   
  
  
