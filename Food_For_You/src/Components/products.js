import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/products')
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addToCart = (item) => {
    // Implement your logic to add the item to the cart
    console.log('Added to Cart:', item);
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.Title}>Menu</h1>
      <div style={styles.menuContainer}>
        {menuItems.map(item => (
          <div key={item.PID} style={styles.menuItem}>
            <h3 style={styles.itemHeader}>{item.PName}</h3>
            <p style={{ fontWeight: 'bold' }}>{item.PDescription}</p>
            <p>Category: {item.catogory}</p>
            <p>Price: {item.Price}</p>
            
            <button onClick={() => addToCart(item)} style={styles.addToCartButton}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  app: {
    textAlign: 'center',
    padding: '20px',
  },
  menuContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  Title: {
    textAlign: 'center',
    fontFamily: 'Fredericka',
    marginBottom: '2rem',
    fontSize: '3.5rem',
  },
  menuItem: {
    backgroundColor: '#fff',
    border: '2px solid #dddba0',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
    width: '250px',
  },
  itemHeader: {
    color: 'black',
    fontFamily: 'Gabelisa',
    margin:'1rem',
    // fontWeight: 'bolder',
  },
  addToCartButton: {
    backgroundColor: '#ffe001',
    color: 'black',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '8px',
    marginTop: '10px',
  },
  
};

export default Products;
