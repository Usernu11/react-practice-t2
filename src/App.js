import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import React, { useState } from "react"

function App() {
  // const [cartCount, setCartCount] = useState('')

  // Состояние для хранения количества покупок каждого товара
  const [cartCounts, setCartCounts] = useState({
    Electronium: 0,
    Atomirius: 0,
    Quantos: 0,
  })

  // Функция для увеличения количества покупок конкретного товара
  const handleAddToCart = (name) => {
    setCartCounts((prevCounts) => ({
      ...prevCounts,
      [name]: prevCounts[name] + 1,
    }))
  }

  // const handleAddToCart = () => {
  //   // Если cartCount пустая строка, начинаем с 1
  //   if (cartCount === '') {
  //     setCartCount(1)
  //   } else {
  //     // Иначе увеличиваем на 1
  //     setCartCount(cartCount + 1)
  //   }
  // }

  return (
    <div className="App">
      <header className="App-header">
        <Header cartCount={cartCounts} />
        <div className='cards-wrapper'>
          <Card name='Electronium' price={500} onAddToCart={handleAddToCart} />
          <Card name='Atomirius' price={1500} onAddToCart={handleAddToCart} />
          <Card name='Quantos' price={5000} onAddToCart={handleAddToCart} />
        </div>
      </header>
    </div>
  );
}

export default App;
