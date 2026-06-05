import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Lock, User, Car, Shield, FileText } from 'lucide-react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    const success = login(username, password);
    if (success) {
      // Redirect based on role
      if (username === 'buyer') {
        navigate('/buyer');
      } else if (username === 'manager') {
        navigate('/manager');
      } else if (username === 'appraisal') {
        navigate('/appraisal');
      }
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleQuickLogin = (role: 'buyer' | 'manager' | 'appraisal') => {
    const credentials = {
      buyer: { username: 'buyer', password: 'buyer123' },
      manager: { username: 'manager', password: 'manager123' },
      appraisal: { username: 'appraisal', password: 'appraisal123' }
    };

    setUsername(credentials[role].username);
    setPassword(credentials[role].password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-4">
            <Car className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">FSBO Buying Assistant</h1>
          <p className="text-gray-600">Vehicle Acquisition Management System</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign In</h2>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg"
            >
              Sign In
            </button>
          </form>

          {/* Quick Login Options */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center mb-4">Quick Login (Demo)</p>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleQuickLogin('buyer')}
                className="flex flex-col items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition border border-blue-200"
              >
                <User className="w-6 h-6 text-blue-600 mb-1" />
                <span className="text-xs font-medium text-blue-700">Buyer</span>
              </button>
              <button
                onClick={() => handleQuickLogin('manager')}
                className="flex flex-col items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition border border-purple-200"
              >
                <Shield className="w-6 h-6 text-purple-600 mb-1" />
                <span className="text-xs font-medium text-purple-700">Manager</span>
              </button>
              <button
                onClick={() => handleQuickLogin('appraisal')}
                className="flex flex-col items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition border border-green-200"
              >
                <FileText className="w-6 h-6 text-green-600 mb-1" />
                <span className="text-xs font-medium text-green-700">Appraisal</span>
              </button>
            </div>
          </div>

          {/* Credentials Info */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600 font-medium mb-2">Demo Credentials:</p>
            <div className="space-y-1 text-xs text-gray-500">
              <p><span className="font-medium text-blue-600">Buyer:</span> buyer / buyer123</p>
              <p><span className="font-medium text-purple-600">Manager:</span> manager / manager123</p>
              <p><span className="font-medium text-green-600">Appraisal:</span> appraisal / appraisal123</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Secure login for authorized personnel only
        </p>
      </div>
    </div>
  );
};

export default Login;
