import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import React, { useState } from "react"

function App() {
  const [cartCount, setCartCount] = useState('')

  const handleAddToCart = () => {
    // Если cartCount пустая строка, начинаем с 1
    if (cartCount === '') {
      setCartCount(1)
    } else {
      // Иначе увеличиваем на 1
      setCartCount(cartCount + 1)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header cartCount={cartCount} />
        <Card onAddToCart={handleAddToCart} />
      </header>
    </div>
  );
}

export default App;
