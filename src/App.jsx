import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import Login from './components/Login';
import Footer from './components/Footer';
import Checkout from './components/Checkout';  // Importa el componente Checkout
import Navbar from './components/Navbar';
import Carrito from './components/Carrito'; // Importa el componente

function App() {
  const navbarMenus = [
    { id: 1, path: "/", name: "Product List" },
    { id: 2, path: "/cart", name: "Cart" },
    { id: 3, path: "/login", name: "Login" },
    { id: 4, path: "/checkout", name: "Checkout" }, // Nueva entrada para el Checkout
  ];

  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Header />
          <main className="container">
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/checkout" element={<Checkout />} /> {/* Nueva ruta para Checkout */}
              <Route path="/carrito" element={<Carrito />} /> {/* Nueva ruta */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
