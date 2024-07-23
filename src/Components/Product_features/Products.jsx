import React,{ useEffect, useState } from 'react'
import Card from '../Card/Card'
import { products } from '../data/products'

const Products = () => {
    const [cards, setCards ] = useState([]);
    
    const page = `${products.category}`;
    const buttonText = 'View More';

    const newProducts = products.map((product) => {
        product.image = `https://cdn.thewirecutter.com/wp-content/media/2023/07/yoga-block-2048px-9231-3x2-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200`
        return product;
    })
    
    useEffect(() => {
        setCards(newProducts);
    }, []);
  

  return (
    <div className="container">
        { <Card cards={cards} page={page} buttonText={buttonText}/> }
    </div>
   
  )
}

export default Products