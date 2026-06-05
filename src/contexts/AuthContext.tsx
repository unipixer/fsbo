import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface User {
  id: string;
  username: string;
  role: 'buyer' | 'manager' | 'appraisal';
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Dummy credentials for each role
const DUMMY_CREDENTIALS = {
  buyer: { username: 'buyer', password: 'buyer123', name: 'Buyer User' },
  manager: { username: 'manager', password: 'manager123', name: 'Manager User' },
  appraisal: { username: 'appraisal', password: 'appraisal123', name: 'Appraisal User' }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    // Check against dummy credentials
    for (const [role, creds] of Object.entries(DUMMY_CREDENTIALS)) {
      if (username === creds.username && password === creds.password) {
        const userData: User = {
          id: Date.now().toString(),
          username: creds.username,
          role: role as 'buyer' | 'manager' | 'appraisal',
          name: creds.name
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
