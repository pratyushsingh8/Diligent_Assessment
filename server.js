// Simple e-commerce backend
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const products = [
  { id: "1", name: "Red T-shirt", price: 299, img: "https://via.placeholder.com/300x200?text=Red+T-shirt", description: "Comfort fit red tee." },
  { id: "2", name: "Blue Jeans", price: 999, img: "https://via.placeholder.com/300x200?text=Blue+Jeans", description: "Slim blue jeans." },
  { id: "3", name: "Sneakers", price: 1999, img: "https://via.placeholder.com/300x200?text=Sneakers", description: "Lightweight sneakers." },
  { id: "4", name: "Backpack", price: 799, img: "https://via.placeholder.com/300x200?text=Backpack", description: "Daily backpack, 20L capacity." },
  { id: "5", name: "Cap", price: 199, img: "https://via.placeholder.com/300x200?text=Cap", description: "Sport cap with logo." },
  { id: "6", name: "Wristwatch", price: 1499, img: "https://via.placeholder.com/300x200?text=Wristwatch", description: "Analog wristwatch with leather strap." }
];

app.get('/api/products', (req, res) => res.json(products));

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
