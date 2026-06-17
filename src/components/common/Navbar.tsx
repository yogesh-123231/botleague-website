import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Shield, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import Button from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Events', path: '/#competitions' },
    { name: 'Programs', path: '/#categories' },
    { name: 'Community', path: '/#join-ecosystem' },
    { name: 'Ranks', path: '/#why-register' },
  ];

  const isActive = (path: string) => {
    if (path === '/#competitions' && location.pathname === '/' && !location.hash) {
      return true;
    }
    if (path.startsWith('/#')) {
      return location.hash === path.substring(1);
    }
    return location.pathname === path && !location.hash;
  };

  return (
    <nav className="sticky top-0 z-50 bg-brand-dark border-b border-white/5 transition-all duration-300 font-body">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img src="/assets/logo.png" alt="BOTLEAGUE" className="h-8 md:h-10 w-auto" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 h-full">
            {navLinks.map((link) => (
              <div key={link.name} className="relative h-20 flex items-center">
                <a
                  key={link.name}
                  href={link.path}
                  className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-white font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
                {isActive(link.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red to-red-500 rounded-t-full" />
                )}
              </div>
            ))}
            {isAuthenticated && (
              <div className="relative h-20 flex items-center">
                <Link
                  to="/dashboard"
                  className={`text-sm font-medium tracking-wider uppercase flex items-center gap-1.5 transition-colors duration-300 ${
                    location.pathname === '/dashboard' ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <LayoutDashboard size={15} />
                  Dashboard
                </Link>
                {location.pathname === '/dashboard' && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red to-red-500 rounded-t-full" />
                )}
              </div>
            )}
          </div>

          {/* Desktop Auth Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-xs tracking-wider text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Shield size={12} className="text-brand-red" />
                  {user?.name || user?.email}
                </span>
                <Button variant="secondary" size="sm" onClick={handleLogout} className="flex items-center gap-1.5">
                  <LogOut size={14} />
                  LOGOUT
                </Button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="secondary" size="sm">
                    LOGIN
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary" size="sm" className="bg-gradient-to-r from-red-600 to-brand-red hover:from-red-500 hover:to-red-600">
                    REGISTER NOW
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark border-b border-white/5 px-4 pt-2 pb-6 space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-lg text-base font-semibold uppercase tracking-wider ${
                isActive(link.path)
                  ? 'bg-brand-red/10 text-brand-red'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          {isAuthenticated && (
            <Link
              to="/dashboard"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-lg text-base font-semibold uppercase tracking-wider flex items-center gap-2 ${
                location.pathname === '/dashboard' ? 'bg-brand-red/10 text-brand-red' : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>
          )}

          <div className="pt-4 border-t border-white/5 flex flex-col space-y-3">
            {isAuthenticated ? (
              <>
                <div className="px-3 py-2 text-sm text-gray-400 bg-white/5 border border-white/10 rounded-lg flex items-center gap-2">
                  <Shield size={16} className="text-brand-red" />
                  {user?.name || user?.email}
                </div>
                <Button variant="secondary" size="md" onClick={handleLogout} className="w-full justify-center">
                  <LogOut size={16} className="mr-2" />
                  LOGOUT
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsOpen(false)} className="w-full">
                  <Button variant="secondary" size="md" className="w-full">
                    LOGIN
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsOpen(false)} className="w-full">
                  <Button variant="primary" size="md" className="w-full bg-gradient-to-r from-red-600 to-brand-red">
                    REGISTER NOW
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
