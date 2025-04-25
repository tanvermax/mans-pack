import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Cardboard Box', price: 2.5, description: 'Durable 12x12x12 inch box' },
  { id: 2, name: 'Bubble Wrap', price: 10.0, description: '50ft roll of protective wrap' },
  { id: 3, name: 'Packing Tape', price: 3.0, description: '2-inch wide, 100ft roll' },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Packaging Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>
              <p className="font-semibold">${product.price.toFixed(2)}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => addToCart(product)}
                className="btn btn-primary"
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
      <Link to="/cart" className="btn btn-secondary mt-6 block w-fit mx-auto">
        View Enquiry Cart
      </Link>
    </div>
  );
};

export default Products;