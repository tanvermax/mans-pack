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

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          {/* No Hydrate needed unless SSR is used */}
          <RouterProvider router={Routs} />
        </QueryClientProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
