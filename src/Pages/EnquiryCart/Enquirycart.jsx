import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { Helmet } from 'react-helmet';

const CartItem = ({ item, removeFromCart, updateQuantity }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.3 }}
    className="card bg-base-100 shadow-xl mb-4"
  >
    <div className="card-body flex flex-row items-center justify-between">
      <div>
        <h2 className="card-title">{item.name}</h2>
        <p>{item.description}</p>
        <p className="font-semibold">${item.price.toFixed(2)} each</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
            className="input input-bordered w-20"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => removeFromCart(item.id)}
          className="btn btn-error btn-sm"
        >
          Remove
        </motion.button>
      </div>
    </div>
  </motion.div>
);

const Enquirycart = () => {
  const context = useContext(CartContext);
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  if (!context) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-red-500">
          Error: CartContext not found. Please ensure CartProvider wraps the app.
        </p>
        <Link to="/" className="btn btn-primary mt-4">Return Home</Link>
      </div>
    );
  }

  const { cart, removeFromCart, updateQuantity } = context;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEnquiryForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitEnquiry = (e) => {
    e.preventDefault();
    alert('Enquiry submitted! (This is a demo)');
    setEnquiryForm({ name: '', email: '', message: '' });
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Enquiry Cart | Mans Packaging</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-center">Enquiry Cart</h1>
      {cart.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg">Your enquiry cart is empty.</p>
          <Link to="/products" className="btn btn-primary mt-4">
            Browse Products
          </Link>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AnimatePresence>
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              ))}
            </AnimatePresence>
          </div>
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card bg-base-100 shadow-xl p-6"
            >
              <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
              <p>Total Items: {totalItems}</p>
              <p>Total Price: ${totalPrice}</p>
              <h2 className="text-xl font-bold mt-6 mb-4">Submit Enquiry</h2>
              <form onSubmit={handleSubmitEnquiry}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={enquiryForm.name}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={enquiryForm.email}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={enquiryForm.message}
                    onChange={handleInputChange}
                    className="textarea textarea-bordered"
                    placeholder="Any specific requirements?"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Submit Enquiry
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enquirycart;