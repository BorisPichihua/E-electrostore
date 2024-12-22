import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import React from 'react';
import Button from "./components/Button";
import Cart from "./components/Cart";
import Counter from "./components/Counter";
import CounterWithUseCallback from "./components/CounterWithUseCallback";
import CounterWithUseEffect from "./components/CounterWithUseEffect";
import CounterWithUseMemo from "./components/CounterWithUseMemo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import PasswordField from "./components/PasswordField";
import Product from "./components/Product";
import Products from "./components/Products";
import Window from "./components/Window";



const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Navbar />

      <Footer />
    </div>
  );
};




export default App;


/* function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>MARITA</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */
