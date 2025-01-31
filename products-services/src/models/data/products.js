import 'dotenv/config.js'
import '../../../config/database.js'
import '../../../../auth-services/src/models/user.js'
import Product from '../Productslist.js'


const productslist = [
    {
        name: "Smartphone Samsung Galaxy S21",
        description: "Un smartphone de última generación con pantalla AMOLED y cámara de 108MP.",
        price: 999.99,
        category: "electrónica",
        stock: 50,
        image: "https://example.com/samsung-galaxy-s21.jpg",
        brand: "Samsung",
        rating: 4.5,
        userId:"679bbc9dbb0a6267b6e7614f"
    },
    {
        name: "Laptop HP Pavilion 15",
        description: "Laptop potente con procesador Intel Core i7 y 16GB de RAM.",
        price: 1200.00,
        category: "electrónica",
        stock: 30,
        image: "https://example.com/hp-pavilion-15.jpg",
        brand: "HP",
        rating: 4.2,
        userId:"679bbc9dbb0a6267b6e76152"
    },
    {
        name: "Zapatillas Nike Air Max",
        description: "Zapatillas deportivas con tecnología Air Max para máxima comodidad.",
        price: 150.00,
        category: "ropa",
        stock: 100,
        image: "https://example.com/nike-air-max.jpg",
        brand: "Nike",
        rating: 4.7,
        userId:"679bbc9dbb0a6267b6e76154"
    },
    {
        name: "Smart TV LG 55\" 4K UHD",
        description: "Televisor inteligente con resolución 4K UHD y sistema webOS.",
        price: 800.00,
        category: "electrónica",
        stock: 20,
        image: "https://example.com/lg-smart-tv.jpg",
        brand: "LG",
        rating: 4.6,
        userId:"679bbc9dbb0a6267b6e76157"
    },
    {
        name: "Cafetera Nespresso Essenza Mini",
        description: "Cafetera compacta para preparar espresso y lungo con cápsulas Nespresso.",
        price: 120.00,
        category: "hogar",
        stock: 60,
        image: "https://example.com/nespresso-essenza-mini.jpg",
        brand: "Nespresso",
        rating: 4.4,
        userId:"679bbc9dbb0a6267b6e76150"
    },
    {
        name: "Reloj Casio G-Shock",
        description: "Reloj resistente al agua y golpes, ideal para deportes y actividades al aire libre.",
        price: 200.00,
        category: "accesorios",
        stock: 40,
        image: "https://example.com/casio-g-shock.jpg",
        brand: "Casio",
        rating: 4.8,
        userId:"679bbc9dbb0a6267b6e76156"
    },
    {
        name: "Tablet Apple iPad Pro",
        description: "Tablet de alto rendimiento con pantalla Liquid Retina y chip M1.",
        price: 1100.00,
        category: "electrónica",
        stock: 25,
        image: "https://example.com/ipad-pro.jpg",
        brand: "Apple",
        rating: 4.9,
        userId:"679bbc9dbb0a6267b6e76158"
    },
    {
        name: "Silla de Oficina Ergonómica",
        description: "Silla ergonómica con soporte lumbar y ajuste de altura.",
        price: 250.00,
        category: "hogar",
        stock: 15,
        image: "https://example.com/silla-ergonomica.jpg",
        brand: "ErgoChair",
        rating: 4.3,
        userId:"679bbc9dbb0a6267b6e76155"
    },
    {
        name: "Auriculares Sony WH-1000XM4",
        description: "Auriculares inalámbricos con cancelación de ruido y sonido de alta calidad.",
        price: 350.00,
        category: "electrónica",
        stock: 35,
        image: "https://example.com/sony-wh-1000xm4.jpg",
        brand: "Sony",
        rating: 4.8,
        userId:"679bbc9dbb0a6267b6e76151"
    },
    {
        name: "Mochila North Face Borealis",
        description: "Mochila resistente y espaciosa, ideal para viajes y actividades al aire libre.",
        price: 130.00,
        category: "accesorios",
        stock: 50,
        image: "https://example.com/north-face-borealis.jpg",
        brand: "North Face",
        rating: 4.6,
        userId:"679bbc9dbb0a6267b6e76153"
    }
];

Product.insertMany(productslist);