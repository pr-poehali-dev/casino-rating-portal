import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const AUTH_URL = 'https://functions.poehali.dev/d86f8ab7-00de-413b-9154-0b3b4d3f1d0a';

interface User {
  id: number;
  email: string;
  full_name?: string;
  created_at: string;
}

interface AuthContextType {
  user: User | null;
  sessionToken: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, fullName?: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('session_token');
    if (token) {
      setSessionToken(token);
      checkAuth();
    } else {
      setIsLoading(false);
    }
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('session_token');
    if (!token) {
      setUser(null);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${AUTH_URL}/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        setSessionToken(token);
      } else {
        localStorage.removeItem('session_token');
        setUser(null);
        setSessionToken(null);
      }
    } catch (error) {
      console.error('Check auth error:', error);
      localStorage.removeItem('session_token');
      setUser(null);
      setSessionToken(null);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, fullName?: string) => {
    const response = await fetch(`${AUTH_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        full_name: fullName,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Błąd rejestracji');
    }

    const data = await response.json();
    setUser(data.user);
    setSessionToken(data.session_token);
    localStorage.setItem('session_token', data.session_token);
  };

  const login = async (email: string, password: string) => {
    const response = await fetch(`${AUTH_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Błąd logowania');
    }

    const data = await response.json();
    setUser(data.user);
    setSessionToken(data.session_token);
    localStorage.setItem('session_token', data.session_token);
  };

  const logout = async () => {
    const token = localStorage.getItem('session_token');
    if (token) {
      try {
        await fetch(`${AUTH_URL}/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.error('Logout error:', error);
      }
    }

    setUser(null);
    setSessionToken(null);
    localStorage.removeItem('session_token');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        sessionToken,
        isLoading,
        login,
        register,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
