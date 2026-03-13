// ── FLYER STORES (for Flyers page) ────────────────────────────────────────────
const FLYER_STORES = [
  {
    id: "hmart",
    name: "H Mart",
    dateRange: "Mar 4-10",
    color: "#C41230",
    products: [
      { id:301, name:"Shin Ramyun Hot & Spicy 5-Pack", size:"5-pack", price:5.49, original:8.99, off:"39% off", deal:"Buy 2 for $10", badge:null, img:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop" },
      { id:302, name:"bibigo Mandu Pork Dumplings", size:"24 oz", price:7.49, original:11.99, off:"38% off", deal:"Buy 2 for $14", badge:null, img:"https://images.unsplash.com/photo-1534482421-64566f976cfa?w=300&h=300&fit=crop" },
      { id:303, name:"Korean Kimchi Traditional", size:"32 oz", price:6.99, original:10.99, off:"36% off", deal:"Buy 2 for $12", badge:"Organic", img:"https://images.unsplash.com/photo-1617692855027-33b14f061079?w=300&h=300&fit=crop" },
      { id:304, name:"Binggrae Banana Milk 6-Pack", size:"6-pack", price:7.99, original:12.99, off:"38% off", deal:"Buy 2 for $14", badge:null, img:"https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop" },
      { id:305, name:"Tteokbokki Rice Cake", size:"21 oz", price:3.99, original:6.49, off:"39% off", deal:"Buy 3 for $10", badge:null, img:"https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=300&h=300&fit=crop" },
      { id:306, name:"COSRX Snail Mucin Essence", size:"100ml", price:16.99, original:25.99, off:"35% off", deal:"$9 off", badge:"Best Seller", img:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop" },
      { id:307, name:"Laneige Lip Sleeping Mask", size:"20g", price:15.99, original:24.99, off:"36% off", deal:"$9 off", badge:null, img:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop" },
      { id:308, name:"Korean BBQ Sauce Bulgogi", size:"16 oz", price:4.49, original:7.49, off:"40% off", deal:"Buy 2 for $8", badge:null, img:"https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=300&h=300&fit=crop" },
      { id:309, name:"Gochujang Red Pepper Paste", size:"17.6 oz", price:5.49, original:8.99, off:"39% off", deal:"Buy 2 for $10", badge:null, img:"https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=300&h=300&fit=crop" },
      { id:310, name:"Korean Seaweed Snack", size:"12 ct", price:2.99, original:5.49, off:"46% off", deal:"Buy 3 for $8", badge:"Organic", img:"https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=300&h=300&fit=crop" },
    ]
  },
  {
    id: "zion",
    name: "Zion Market",
    dateRange: "Mar 2-14",
    color: "#003d2b",
    products: [
      { id:311, name:"Korean Fried Chicken Mix", size:"2.2 lb", price:6.49, original:10.99, off:"41% off", deal:"$4.50 off", badge:null, img:"https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?w=300&h=300&fit=crop" },
      { id:312, name:"Honey Butter Chips", size:"7.76 oz", price:3.49, original:5.99, off:"42% off", deal:"Buy 3 for $9", badge:null, img:"https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&h=300&fit=crop" },
      { id:313, name:"Yakult Probiotic Drink", size:"10 ct", price:4.99, original:7.99, off:"38% off", deal:"Buy 2 for $9", badge:null, img:"https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&h=300&fit=crop" },
      { id:314, name:"Lotte Choco Pie Original", size:"12 ct", price:4.99, original:7.99, off:"38% off", deal:"Buy 2 for $9", badge:null, img:"https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=300&h=300&fit=crop" },
      { id:315, name:"Innisfree Green Tea Serum", size:"80ml", price:19.99, original:31.99, off:"38% off", deal:"$12 off", badge:"Organic", img:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&h=300&fit=crop" },
      { id:316, name:"Samsung Galaxy Buds Pro", size:"1 ct", price:159.99, original:229.99, off:"30% off", deal:"$70 off", badge:"Hot", img:"https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=300&h=300&fit=crop" },
      { id:317, name:"Korean Rice Wine Makgeolli", size:"750ml", price:5.99, original:9.99, off:"40% off", deal:"Buy 2 for $10", badge:null, img:"https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=300&h=300&fit=crop" },
      { id:318, name:"Etude House Sheet Mask Set", size:"10 ct", price:9.99, original:16.99, off:"41% off", deal:"$7 off", badge:null, img:"https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&h=300&fit=crop" },
      { id:319, name:"Korean Green Tea Matcha", size:"100g", price:11.99, original:18.99, off:"37% off", deal:"Buy 2 for $20", badge:"Premium", img:"https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=300&h=300&fit=crop" },
      { id:320, name:"Samyang Buldak Hot Chicken", size:"5-pack", price:5.99, original:9.49, off:"37% off", deal:"Buy 2 for $10", badge:null, img:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop" },
    ]
  },
  {
    id: "galleria",
    name: "Galleria",
    dateRange: "Mar 8-14",
    color: "#6B21A8",
    products: [
      { id:321, name:"Korean Black Bean Noodles", size:"4-pack", price:4.99, original:7.99, off:"38% off", deal:"Buy 2 for $9", badge:null, img:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop" },
      { id:322, name:"Tiger Balm Pain Relieving", size:"18g", price:6.99, original:11.99, off:"42% off", deal:"$5 off", badge:null, img:"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop" },
      { id:323, name:"Korean Pear Juice", size:"12-pack", price:8.99, original:14.99, off:"40% off", deal:"Buy 2 for $16", badge:"Popular", img:"https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=300&fit=crop" },
      { id:324, name:"Missha Time Revolution Essence", size:"150ml", price:24.99, original:39.99, off:"38% off", deal:"$15 off", badge:"Best Seller", img:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop" },
      { id:325, name:"Korean Red Ginseng Extract", size:"240g", price:34.99, original:54.99, off:"36% off", deal:"$20 off", badge:"Premium", img:"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop" },
      { id:326, name:"Korean Dried Seaweed", size:"100 sheets", price:7.99, original:12.99, off:"38% off", deal:"Buy 2 for $14", badge:null, img:"https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=300&h=300&fit=crop" },
      { id:327, name:"CJ Bibigo Seaweed Crisps", size:"5 oz", price:3.49, original:5.99, off:"42% off", deal:"Buy 3 for $9", badge:null, img:"https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=300&h=300&fit=crop" },
      { id:328, name:"Korean Barley Tea", size:"30 bags", price:4.99, original:7.99, off:"38% off", deal:"Buy 2 for $9", badge:null, img:"https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=300&h=300&fit=crop" },
      { id:329, name:"AMORE PACIFIC Moisture Cream", size:"50ml", price:29.99, original:47.99, off:"38% off", deal:"$18 off", badge:"Luxury", img:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&h=300&fit=crop" },
      { id:330, name:"Korean Soju Original", size:"360ml", price:3.99, original:6.49, off:"39% off", deal:"Buy 3 for $10", badge:null, img:"https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=300&h=300&fit=crop" },
    ]
  },
];



