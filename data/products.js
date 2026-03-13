const FOOD = [
  { id:1,  name:"Shin Ramyun Hot & Spicy",          size:"5-pack",  price:6.99, original:9.99, off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop" },
  { id:2,  name:"bibigo Mandu Pork Dumplings",      size:"24 oz",   price:8.99, original:12.99,off:"31% off", badge:null,         img:"https://images.unsplash.com/photo-1534482421-64566f976cfa?w=300&h=300&fit=crop" },
  { id:3,  name:"Lotte Choco Pie Original",         size:"12 ct",   price:5.99, original:8.99, off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=300&h=300&fit=crop" },
  { id:4,  name:"Kimchi Traditional",               size:"32 oz",   price:7.49, original:10.99,off:"32% off", badge:"Organic",    img:"https://images.unsplash.com/photo-1617692855027-33b14f061079?w=300&h=300&fit=crop" },
  { id:5,  name:"Binggrae Banana Milk",             size:"6-pack",  price:8.99, original:12.99,off:"31% off", badge:null,         img:"https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop" },
  { id:6,  name:"Tteokbokki Rice Cake",             size:"21 oz",   price:4.99, original:7.49, off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=300&h=300&fit=crop" },
  { id:7,  name:"Korean BBQ Sauce Bulgogi",         size:"16 oz",   price:5.49, original:7.99, off:"31% off", badge:null,         img:"https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=300&h=300&fit=crop" },
  { id:8,  name:"Yakult Probiotic Drink",           size:"10 ct",   price:5.99, original:8.99, off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&h=300&fit=crop" },
  { id:9,  name:"Gochujang Red Pepper Paste",       size:"17.6 oz", price:6.49, original:9.49, off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=300&h=300&fit=crop" },
  { id:10, name:"Korean Seaweed Snack",             size:"12 ct",   price:3.99, original:5.99, off:"33% off", badge:"Organic",    img:"https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=300&h=300&fit=crop" },
  { id:11, name:"Honey Butter Chips",               size:"7.76 oz", price:4.49, original:6.49, off:"31% off", badge:null,         img:"https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&h=300&fit=crop" },
  { id:12, name:"Korean Fried Chicken Mix",         size:"2.2 lb",  price:7.99, original:11.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?w=300&h=300&fit=crop" },
];

// Beauty - K-Beauty Products
const BEAUTY = [
  { id:20, name:"COSRX Snail Mucin Essence",        size:"100ml",   price:19.99,original:28.99,off:"31% off", badge:"Best Seller",img:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop" },
  { id:21, name:"Laneige Lip Sleeping Mask",        size:"20g",     price:18.99,original:26.99,off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop" },
  { id:22, name:"Innisfree Green Tea Serum",        size:"80ml",    price:22.99,original:32.99,off:"30% off", badge:"Organic",    img:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&h=300&fit=crop" },
  { id:23, name:"Etude House Sheet Mask Set",       size:"10 ct",   price:12.99,original:18.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&h=300&fit=crop" },
  { id:24, name:"MISSHA BB Cream SPF42",            size:"50ml",    price:14.99,original:21.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop" },
  { id:25, name:"Some By Mi AHA BHA PHA Toner",     size:"150ml",   price:16.99,original:24.99,off:"32% off", badge:"Best Seller",img:"https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop" },
  { id:26, name:"Sulwhasoo First Care Serum",       size:"60ml",    price:54.99,original:79.99,off:"31% off", badge:"Premium",    img:"https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=300&fit=crop" },
  { id:27, name:"Heimish All Clean Balm",           size:"120ml",   price:15.99,original:22.99,off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=300&h=300&fit=crop" },
  { id:28, name:"BENTON Aloe Propolis Gel",         size:"100ml",   price:13.99,original:19.99,off:"30% off", badge:"Organic",    img:"https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=300&h=300&fit=crop" },
  { id:29, name:"Peripera Ink Velvet Lip Tint",     size:"4g",      price:9.99, original:14.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop" },
  { id:30, name:"Klairs Supple Preparation Toner",  size:"180ml",   price:17.99,original:25.99,off:"31% off", badge:null,         img:"https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop" },
  { id:31, name:"Dr. Jart+ Ceramidin Cream",        size:"50ml",    price:38.99,original:54.99,off:"29% off", badge:"Premium",    img:"https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=300&h=300&fit=crop" },
];

// Home - Home & Living
const HOME = [
  { id:40, name:"Korean Ceramic Vase Set",          size:"3 pcs",   price:29.99,original:44.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=300&h=300&fit=crop" },
  { id:41, name:"Bamboo Organizer Box",             size:"Large",   price:19.99,original:29.99,off:"33% off", badge:"Eco",        img:"https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=300&h=300&fit=crop" },
  { id:42, name:"Korean Cotton Bedding Set",        size:"Queen",   price:79.99,original:119.99,off:"33% off",badge:null,         img:"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300&h=300&fit=crop" },
  { id:43, name:"Minimalist Desk Lamp LED",         size:"1 each",  price:34.99,original:49.99,off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop" },
  { id:44, name:"Soy Wax Candle Set",               size:"4 ct",    price:24.99,original:36.99,off:"32% off", badge:"Organic",    img:"https://images.unsplash.com/photo-1603006905003-be475563bc59?w=300&h=300&fit=crop" },
  { id:45, name:"Korean Floor Cushion",             size:"45cm",    price:22.99,original:32.99,off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop" },
  { id:46, name:"Diffuser & Reed Set Lavender",     size:"200ml",   price:18.99,original:27.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=300&h=300&fit=crop" },
  { id:47, name:"Cotton Bath Towel Set",            size:"4 pcs",   price:26.99,original:39.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1583845112203-29329902332e?w=300&h=300&fit=crop" },
  { id:48, name:"Wall Art Print Korean",            size:"16x20",   price:15.99,original:22.99,off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=300&h=300&fit=crop" },
  { id:49, name:"Ceramic Planter Pot",              size:"6 inch",  price:12.99,original:18.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=300&fit=crop" },
  { id:50, name:"Storage Basket Woven",             size:"Medium",  price:16.99,original:24.99,off:"32% off", badge:"Eco",        img:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop" },
  { id:51, name:"Linen Throw Blanket",              size:"50x60",   price:39.99,original:59.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=300&h=300&fit=crop" },
];

// Electronics
const ELECTRONICS = [
  { id:60, name:"Samsung Galaxy Buds Pro",          size:"1 pair",  price:149.99,original:199.99,off:"25% off",badge:"Best Seller",img:"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop" },
  { id:61, name:"USB-C Fast Charger 65W",           size:"1 each",  price:29.99,original:44.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop" },
  { id:62, name:"Wireless Charging Pad",            size:"1 each",  price:19.99,original:29.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=300&h=300&fit=crop" },
  { id:63, name:"Portable Power Bank 20000mAh",     size:"1 each",  price:34.99,original:49.99,off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop" },
  { id:64, name:"Bluetooth Speaker Mini",           size:"1 each",  price:24.99,original:36.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop" },
  { id:65, name:"LED Ring Light 10 inch",           size:"1 set",   price:22.99,original:32.99,off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=300&fit=crop" },
  { id:66, name:"Phone Stand Adjustable",           size:"1 each",  price:14.99,original:21.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop" },
  { id:67, name:"USB Hub 7-Port",                   size:"1 each",  price:27.99,original:39.99,off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1625842268584-8f3296236761?w=300&h=300&fit=crop" },
  { id:68, name:"Webcam HD 1080p",                  size:"1 each",  price:44.99,original:64.99,off:"31% off", badge:null,         img:"https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=300&h=300&fit=crop" },
  { id:69, name:"Cable Organizer Set",              size:"6 pcs",   price:9.99, original:14.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop" },
  { id:70, name:"Smart LED Strip Lights",           size:"16ft",    price:18.99,original:27.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop" },
  { id:71, name:"Laptop Stand Aluminum",            size:"1 each",  price:32.99,original:47.99,off:"31% off", badge:null,         img:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop" },
];

// Kitchen & Dining
const KITCHEN = [
  { id:80, name:"Korean Earthenware Pot Dolsot",    size:"Medium",  price:29.99,original:44.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1585515320310-259814833e62?w=300&h=300&fit=crop" },
  { id:81, name:"Stainless Steel Chopsticks Set",   size:"5 pairs", price:12.99,original:18.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop" },
  { id:82, name:"Korean BBQ Grill Pan",             size:"12 inch", price:34.99,original:49.99,off:"30% off", badge:"Best Seller",img:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=300&fit=crop" },
  { id:83, name:"Rice Cooker Digital 6-Cup",        size:"1 each",  price:59.99,original:89.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop" },
  { id:84, name:"Ceramic Bowl Set Korean",          size:"4 ct",    price:24.99,original:36.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=300&h=300&fit=crop" },
  { id:85, name:"Bamboo Cutting Board",             size:"Large",   price:18.99,original:27.99,off:"32% off", badge:"Eco",        img:"https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=300&h=300&fit=crop" },
  { id:86, name:"Electric Kettle 1.7L",             size:"1 each",  price:32.99,original:47.99,off:"31% off", badge:null,         img:"https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=300&h=300&fit=crop" },
  { id:87, name:"Korean Side Dish Plates",          size:"6 ct",    price:19.99,original:29.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=300&h=300&fit=crop" },
  { id:88, name:"Stainless Steel Ladle Set",        size:"3 pcs",   price:14.99,original:21.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=300&h=300&fit=crop" },
  { id:89, name:"Glass Food Container Set",         size:"10 ct",   price:26.99,original:39.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=300&h=300&fit=crop" },
  { id:90, name:"Silicone Spatula Set",             size:"5 pcs",   price:11.99,original:17.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop" },
  { id:91, name:"Tea Pot Ceramic",                  size:"800ml",   price:27.99,original:39.99,off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=300&h=300&fit=crop" },
];

// Fashion
const FASHION = [
  { id:100, name:"Korean Street Style Hoodie",      size:"M-XL",    price:39.99,original:59.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop" },
  { id:101, name:"Minimalist Canvas Tote Bag",      size:"1 each",  price:18.99,original:27.99,off:"32% off", badge:"Eco",        img:"https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&h=300&fit=crop" },
  { id:102, name:"Korean Fashion Cap",              size:"One Size",price:14.99,original:21.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=300&fit=crop" },
  { id:103, name:"Silk Scarf Korean Pattern",       size:"35x35",   price:24.99,original:36.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=300&fit=crop" },
  { id:104, name:"Oversized Cotton T-Shirt",        size:"S-XXL",   price:19.99,original:29.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop" },
  { id:105, name:"Korean Socks Gift Set",           size:"5 pairs", price:12.99,original:18.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=300&h=300&fit=crop" },
  { id:106, name:"Crossbody Mini Bag",              size:"1 each",  price:29.99,original:44.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop" },
  { id:107, name:"Beanie Hat Knitted",              size:"One Size",price:11.99,original:17.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=300&h=300&fit=crop" },
  { id:108, name:"Wide Leg Pants Korean Style",     size:"S-XL",    price:34.99,original:49.99,off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop" },
  { id:109, name:"Hair Clips Set Minimalist",       size:"12 pcs",  price:8.99, original:12.99,off:"31% off", badge:null,         img:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop" },
  { id:110, name:"Canvas Sneakers White",           size:"5-11",    price:44.99,original:64.99,off:"31% off", badge:null,         img:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=300&h=300&fit=crop" },
  { id:111, name:"Bucket Hat Summer",               size:"One Size",price:16.99,original:24.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1521369909029-2afed882baee?w=300&h=300&fit=crop" },
];

// Wellness & Sports
const WELLNESS = [
  { id:120, name:"Yoga Mat Non-Slip Premium",       size:"6mm",     price:29.99,original:44.99,off:"33% off", badge:"Eco",        img:"https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop" },
  { id:121, name:"Stainless Steel Water Bottle",    size:"32 oz",   price:22.99,original:32.99,off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop" },
  { id:122, name:"Resistance Bands Set",            size:"5 levels",price:14.99,original:21.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=300&h=300&fit=crop" },
  { id:123, name:"Korean Red Ginseng Extract",      size:"100g",    price:49.99,original:74.99,off:"33% off", badge:"Premium",    img:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop" },
  { id:124, name:"Foam Roller Muscle Recovery",     size:"18 inch", price:19.99,original:29.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop" },
  { id:125, name:"Vitamin C 1000mg Korean",         size:"120 ct",  price:18.99,original:27.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=300&h=300&fit=crop" },
  { id:126, name:"Jump Rope Speed Weighted",        size:"1 each",  price:12.99,original:18.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop" },
  { id:127, name:"Collagen Peptides Powder",        size:"300g",    price:34.99,original:49.99,off:"30% off", badge:"Best Seller",img:"https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=300&h=300&fit=crop" },
  { id:128, name:"Massage Gun Deep Tissue",         size:"1 each",  price:69.99,original:99.99,off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop" },
  { id:129, name:"Workout Gloves Premium",          size:"S-XL",    price:16.99,original:24.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop" },
  { id:130, name:"Protein Shaker Bottle",           size:"28 oz",   price:11.99,original:17.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop" },
  { id:131, name:"Omega-3 Fish Oil Korean",         size:"180 ct",  price:24.99,original:36.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=300&h=300&fit=crop" },
];

// Baby & Kids
const BABY_KIDS = [
  { id:140, name:"Baby Soft Cotton Bodysuit",       size:"0-12M",   price:12.99,original:18.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300&h=300&fit=crop" },
  { id:141, name:"Kids Wooden Building Blocks",     size:"50 pcs",  price:24.99,original:36.99,off:"32% off", badge:"Eco",        img:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300&h=300&fit=crop" },
  { id:142, name:"Baby Bottle Set BPA Free",        size:"3 ct",    price:19.99,original:29.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300&h=300&fit=crop" },
  { id:143, name:"Kids Korean Hanbok Dress",        size:"3-5Y",    price:44.99,original:64.99,off:"31% off", badge:"Traditional",img:"https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=300&h=300&fit=crop" },
  { id:144, name:"Baby Teething Toy Set",           size:"4 pcs",   price:14.99,original:21.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300&h=300&fit=crop" },
  { id:145, name:"Kids Educational Puzzle",         size:"100 pcs", price:16.99,original:24.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300&h=300&fit=crop" },
  { id:146, name:"Baby Organic Lotion",             size:"8 oz",    price:11.99,original:17.99,off:"33% off", badge:"Organic",    img:"https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=300&h=300&fit=crop" },
  { id:147, name:"Kids Backpack Animal Design",     size:"1 each",  price:22.99,original:32.99,off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop" },
  { id:148, name:"Baby Blanket Soft Fleece",        size:"30x40",   price:18.99,original:27.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop" },
  { id:149, name:"Kids Art Supply Set",             size:"120 pcs", price:29.99,original:44.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&h=300&fit=crop" },
];

// K-POP
const KPOP = [
  { id:160, name:"BTS Official Light Stick",        size:"1 each",  price:49.99,original:69.99,off:"29% off", badge:"Official",   img:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop" },
  { id:161, name:"BLACKPINK Album Collection",      size:"1 album", price:24.99,original:34.99,off:"29% off", badge:null,         img:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop" },
  { id:162, name:"K-POP Photo Card Binder",         size:"1 each",  price:14.99,original:21.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?w=300&h=300&fit=crop" },
  { id:163, name:"BTS Poster Set Official",         size:"4 pcs",   price:19.99,original:29.99,off:"33% off", badge:"Official",   img:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop" },
  { id:164, name:"K-POP Lightstick Keychain",       size:"1 each",  price:9.99, original:14.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop" },
  { id:165, name:"NewJeans Merch T-Shirt",          size:"S-XL",    price:34.99,original:49.99,off:"30% off", badge:"Official",   img:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=300&fit=crop" },
  { id:166, name:"SEVENTEEN Album",                 size:"1 album", price:22.99,original:32.99,off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop" },
  { id:167, name:"K-POP Sticker Pack",              size:"100 pcs", price:7.99, original:11.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?w=300&h=300&fit=crop" },
  { id:168, name:"Stray Kids Official Hoodie",      size:"M-XXL",   price:54.99,original:79.99,off:"31% off", badge:"Official",   img:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop" },
  { id:169, name:"TWICE Photo Book",                size:"1 each",  price:29.99,original:44.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?w=300&h=300&fit=crop" },
];

// K-Culture
const KCULTURE = [
  { id:180, name:"Korean Drama DVD Box Set",        size:"10 disc", price:49.99,original:74.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=300&fit=crop" },
  { id:181, name:"Hangul Learning Book",            size:"1 each",  price:18.99,original:27.99,off:"32% off", badge:"Best Seller",img:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop" },
  { id:182, name:"Korean Calligraphy Set",          size:"1 set",   price:34.99,original:49.99,off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&h=300&fit=crop" },
  { id:183, name:"Traditional Tea Ceremony Set",    size:"6 pcs",   price:44.99,original:64.99,off:"31% off", badge:"Traditional",img:"https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=300&h=300&fit=crop" },
  { id:184, name:"Korean Folk Music CD",            size:"1 each",  price:12.99,original:18.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop" },
  { id:185, name:"Korean History Book",             size:"1 each",  price:24.99,original:36.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop" },
  { id:186, name:"Korean Fan Traditional",          size:"1 each",  price:16.99,original:24.99,off:"32% off", badge:"Handmade",   img:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&h=300&fit=crop" },
  { id:187, name:"K-Drama OST Collection",          size:"2 CD",    price:19.99,original:29.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop" },
  { id:188, name:"Korean Language Flashcards",      size:"200 pcs", price:14.99,original:21.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?w=300&h=300&fit=crop" },
  { id:189, name:"Traditional Mask Decoration",     size:"1 each",  price:22.99,original:32.99,off:"30% off", badge:"Handmade",   img:"https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&h=300&fit=crop" },
];

// Office Supplies
const OFFICE = [
  { id:200, name:"Korean Stationery Set",           size:"10 pcs",  price:14.99,original:21.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&h=300&fit=crop" },
  { id:201, name:"Minimalist Desk Organizer",       size:"1 each",  price:24.99,original:36.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=300&h=300&fit=crop" },
  { id:202, name:"Gel Pen Set Pastel Colors",       size:"12 ct",   price:9.99, original:14.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&h=300&fit=crop" },
  { id:203, name:"Cute Sticky Notes Set",           size:"600 pcs", price:8.99, original:12.99,off:"31% off", badge:null,         img:"https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?w=300&h=300&fit=crop" },
  { id:204, name:"Planner 2026 Korean Style",       size:"1 each",  price:18.99,original:27.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop" },
  { id:205, name:"Washi Tape Collection",           size:"20 rolls",price:12.99,original:18.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&h=300&fit=crop" },
  { id:206, name:"Acrylic Tape Dispenser",          size:"1 each",  price:11.99,original:17.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=300&h=300&fit=crop" },
  { id:207, name:"File Folder Set Pastel",          size:"12 ct",   price:16.99,original:24.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?w=300&h=300&fit=crop" },
  { id:208, name:"Desk Mat Large",                  size:"35x17",   price:22.99,original:32.99,off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=300&h=300&fit=crop" },
  { id:209, name:"Pen Holder Ceramic",              size:"1 each",  price:13.99,original:19.99,off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&h=300&fit=crop" },
];

// Pets
const PETS = [
  { id:220, name:"Premium Dog Food Korean",         size:"5 lb",    price:29.99,original:44.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=300&h=300&fit=crop" },
  { id:221, name:"Cat Scratching Post Tower",       size:"1 each",  price:49.99,original:74.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=300&h=300&fit=crop" },
  { id:222, name:"Pet Grooming Brush Set",          size:"3 pcs",   price:14.99,original:21.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=300&h=300&fit=crop" },
  { id:223, name:"Dog Treat Korean Style",          size:"16 oz",   price:12.99,original:18.99,off:"32% off", badge:"Natural",    img:"https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=300&h=300&fit=crop" },
  { id:224, name:"Cat Toy Interactive Set",         size:"10 pcs",  price:16.99,original:24.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=300&h=300&fit=crop" },
  { id:225, name:"Pet Bed Soft Plush",              size:"Medium",  price:34.99,original:49.99,off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1560807707-8cc77767d783?w=300&h=300&fit=crop" },
  { id:226, name:"Dog Leash & Collar Set",          size:"M/L",     price:19.99,original:29.99,off:"33% off", badge:null,         img:"https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=300&h=300&fit=crop" },
  { id:227, name:"Cat Food Premium Korean",         size:"4 lb",    price:24.99,original:36.99,off:"32% off", badge:null,         img:"https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=300&h=300&fit=crop" },
  { id:228, name:"Pet Water Fountain",              size:"2L",      price:27.99,original:39.99,off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=300&h=300&fit=crop" },
  { id:229, name:"Dog Raincoat Waterproof",         size:"S-XL",    price:22.99,original:32.99,off:"30% off", badge:null,         img:"https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=300&h=300&fit=crop" },
];


const ALL_PRODUCTS = [...FOOD, ...BEAUTY, ...HOME, ...ELECTRONICS, ...KITCHEN, ...FASHION, ...WELLNESS, ...BABY_KIDS, ...KPOP, ...KCULTURE, ...OFFICE, ...PETS];

