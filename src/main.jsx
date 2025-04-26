import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Routs } from './Routs/Routs.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { CartProvider } from './Pages/EnquiryCart/CartContext.jsx';

// Initialize react-query client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/* Provides Auth context globally */}
      <CartProvider> {/* Provides Cart context globally */}
        <QueryClientProvider client={queryClient}> {/* Provides react-query globally */}
          {/* RouterProvider will use Routs where you define PrivateRoute and AdminRoute */}
          <RouterProvider router={Routs} />
        </QueryClientProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
