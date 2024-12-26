import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';

const PRODUCT_LIST = [

  {
    id: '1',
    name: 'Auriculares Inteligentes con Cancelación de Ruido',
    price: 250.00,
    description: 'Auriculares inalámbricos con IA para adaptarse al entorno y cancelar ruidos.',
    image: 'https://promart.vteximg.com.br/arquivos/ids/7609198-1000-1000/imageUrl_1.jpg?v=638352531116400000',
    category: 'men'
  },
  {
    id: '2',
    name: 'Smartphone AI Camera 108MP',
    price: 899.99,
    description: 'Teléfono con cámara AI de 108 MP para fotos perfectas cada vez.',
    image: 'https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/04/xiaomi-11t-pro-blue.png?ssl=1',
    category: 'men'
  },
  {
    id: '3',
    name: 'Reloj Inteligente AI Monitor de Salud',
    price: 199.99,
    description: 'Reloj con IA para monitorizar la salud y alertas de bienestar.',
    image: 'https://www.valdus.com/wp-content/uploads/2023/11/2023110709255054e76ac4c118957b.jpg',
    category: 'women'
  },
  {
    id: '4',
    name: 'Altavoz Inteligente con IA',
    price: 130.00,
    description: 'Altavoz que ajusta la música a tu gusto usando inteligencia artificial.',
    image: 'https://www.shutterstock.com/image-vector/smart-speaker-3d-vector-illustration-600nw-2293830457.jpg',
    category: 'kids'
  },
  {
    id: '5',
    name: 'Cámara de Seguridad AI Reconocimiento Facial',
    price: 300.00,
    description: 'Cámara con IA para reconocer caras y alertarte sobre eventos importantes.',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglfZFgAQMeil5QgJ3uAc5rS68JUCuJAkpjJ5ii3JNwRDIXIVxcv0VidoMr0j0mcHIMxRsAi_9_yIP7afGvlkY9ZwYJJA_BGHLcig0zQgdjUwKb25yPoU7Len-F_Y-xqgAbKJv84g7DXYU/s1600/PAGINA-5.jpg',
    category: 'men'
  },
  {
    id: '6',
    name: 'Robot Aspiradora AI',
    price: 499.00,
    description: 'Aspiradora inteligente con mapeo del hogar usando IA para limpieza eficiente.',
    image: 'https://img.global.news.samsung.com/es/wp-content/uploads/2022/11/Jet-Bot-AI-SmartThings-Pet_main2.jpg',
    category: 'women'
  },
  {
    id: '7',
    name: 'Gafas Inteligentes con IA Realidad Aumentada',
    price: 350.00,
    description: 'Gafas AR con IA para interacción y análisis en tiempo real.',
    image: 'https://novatierra.com/wp-content/uploads/2024/09/next-gen-AI-glasses.png',
    category: 'men'
  },
  {
    id: '8',
    name: 'Drone con IA Seguimiento Automático',
    price: 899.99,
    description: 'Drone que usa IA para seguir y grabar con precisión tus movimientos.',
    image: 'https://www.droneguru.es/wp-content/uploads/2023/12/Dron-Hoverair-x1-con-IA-1.jpg',
    category: 'men'
  },
  {
    id: '9',
    name: 'Termostato Inteligente con IA',
    price: 120.00,
    description: 'Termostato que ajusta la temperatura automáticamente utilizando IA.',
    image: 'https://img.freepik.com/fotos-premium/termostato-inteligente-interfaz-digital1_995578-943.jpg',
    category: 'women'
  },
  {
    id: '10',
    name: 'Robot de Cocina AI',
    price: 399.99,
    description: 'Robot inteligente que cocina y ajusta las recetas según tus preferencias.',
    image: 'https://cdn.pixabay.com/photo/2023/07/13/08/58/ai-generated-8124239_960_720.jpg',
    category: 'women'
  },
  {
    id: '11',
    name: 'Pantalla de TV 8K con IA',
    price: 1500.00,
    description: 'TV 8K con IA para optimizar imágenes en tiempo real y ofrecer la mejor experiencia.',
    image: 'https://img.global.news.samsung.com/pe/wp-content/uploads/2024/05/imagen-01-1.jpg',
    category: 'men'
  },
  {
    id: '12',
    name: 'Cámara 360° AI para Streaming',
    price: 250.00,
    description: 'Cámara 360° que utiliza IA para optimizar la toma de imágenes para streaming.',
    image: 'https://m.media-amazon.com/images/I/61Yjn7MNBJL._AC_SL1435_.jpg',
    category: 'men'
  },
  {
    id: '13',
    name: 'Asistente Virtual AI para el Hogar',
    price: 99.99,
    description: 'Asistente para gestionar electrodomésticos y dispositivos con IA.',
    image: 'https://files.lafm.com.co/assets/public/styles/4x3/public/2022-02/asistentes-virtuales.jpg?VersionId=fa1wOh1iqq1Qd4DnUCj33X9mwE1W.3bC&itok=PQ3rSANB',
    category: 'kids'
  },
  {
    id: '14',
    name: 'Cargador Inalámbrico Inteligente con IA',
    price: 50.00,
    description: 'Cargador que optimiza la carga según el dispositivo y las condiciones de uso.',
    image: 'https://img.freepik.com/fotos-premium/imagen-generada-ia-telefono-inteligente-cargando-cargador-inalambrico_629524-2807.jpg',
    category: 'men'
  },
  {
    id: '15',
    name: 'Teclado Inteligente con IA para Escritura Rápida',
    price: 89.99,
    description: 'Teclado que ajusta la velocidad de escritura usando IA para mejorar tu productividad.',
    image: 'https://fotografias.lasexta.com/clipping/cmsimages01/2015/02/12/F7BF810F-A596-41AE-B927-944302BADD97/98.jpg?crop=643,362,x0,y0&width=1900&height=1069&optimize=high&format=webply',
    category: 'kids'
  },
  {
    id: '16',
    name: 'Zapatos Inteligentes AI para Análisis de Marcha',
    price: 199.99,
    description: 'Zapatos que usan IA para analizar y mejorar tu marcha.',
    image: 'https://abyayala.tv.bo/wp-content/uploads/2023/05/zapatos-ai.png',
    category: 'kids'
  },
  {
    id: '17',
    name: 'Cámara de Seguridad AI para Automóviles',
    price: 249.00,
    description: 'Cámara para vehículos con IA que detecta eventos importantes como accidentes.',
    image: 'https://image.made-in-china.com/2f0j00PWGqFjLhnocD/Ai-Car-Sideview-Backup-Camera-System-for-Tractor-Truck-Trailer.webp',
    category: 'men'
  },
  {
    id: '18',
    name: 'Botón Inteligente AI para Control del Hogar',
    price: 39.99,
    description: 'Botón compacto que permite controlar dispositivos inteligentes en tu hogar.',
    image: 'https://www.tongou.com/es/wp-content/uploads/2024/04/SY1-1024x1024.jpg.webp',
    category: 'women'
  },
  {
    id: '19',
    name: 'Cámara AI con Análisis de Movimiento',
    price: 199.99,
    description: 'Cámara de seguridad con IA que analiza el movimiento y proporciona alertas inteligentes.',
    image: 'https://hanwhavision.eu/wp-content/uploads/2023/07/6728-HT-HQ-PTZ-Plus-press-image-300x300.jpg',
    category: 'men'
  },
  {
    id: '20',
    name: 'Auriculares Deportivos con AI de Análisis de Rendimiento',
    price: 160.00,
    description: 'Auriculares deportivos que analizan tu rendimiento físico durante el ejercicio.',
    image: 'https://www.adslzone.net/app/uploads-adslzone.net/2020/09/auriculares-deporte.jpg?x=480&y=375&quality=80',
    category: 'women'
  },
  {
    id: '21',
    name: 'Mochila Inteligente con Carga Solar y IA',
    price: 120.00,
    description: 'Mochila que usa IA para gestionar la carga solar de tus dispositivos.',
    image: 'https://casaecologica.pe/wp-content/uploads/2018/09/bag5.jpg',
    category: 'women'
  },
  {
    id: '22',
    name: 'Lentes de Sol Inteligentes con IA',
    price: 180.00,
    description: 'Lentes de sol que ajustan su tintado con IA según la luz ambiental.',
    image: 'https://i.blogs.es/110e1c/gafas/1366_2000.jpeg',
    category: 'women'
  },
  {
    id: '23',
    name: 'Monitor Inteligente AI para Ergonomía',
    price: 300.00,
    description: 'Monitor que ajusta automáticamente su altura y ángulo con IA para optimizar la postura.',
    image: 'https://i.blogs.es/23d3fd/lg_ergo_ia_monitor-2/1366_2000.jpeg',
    category: 'men'
  },

]


function Products() {
  const [category, setCategory] = useState('all');
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    return PRODUCT_LIST.filter(product => {
      const matchesCategory = category === 'all' || 
        product.category.toLowerCase() === category.toLowerCase();

      return matchesCategory;
    });
  }, [category]);

  return (
    <div className="products-container">
      <div className="filter-container">
        <select
          className="input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">Todos los productos</option>
          <option value="men">Hombres</option>
          <option value="women">Damas</option>
          <option value="kids">Niños</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">No products found matching your criteria.</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="card product-card">
              <img src={product.image} alt={product.name} />
              <h3 className="product-title">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
