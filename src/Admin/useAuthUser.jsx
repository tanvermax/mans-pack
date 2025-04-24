import { useState, useEffect } from 'react';

const useAuthUser = (email) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!email) {
      setUser(null);
      setError('No email provided');
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://man-pack-server.vercel.app/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        const users = await response.json();
        const matchedUser = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
        
        if (matchedUser) {
          setUser(matchedUser);
          setError(null);
        } else {
          setUser(null);
          setError('No user found with this email');
        }
      } catch (err) {
        setUser(null);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [email]);

  // Check if user is admin
  const isAdmin = user && user.role === 'admin';

  return { user, loading, error, isAdmin };
};

export default useAuthUser;