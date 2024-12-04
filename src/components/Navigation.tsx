import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCartIcon, CodeIcon, Coins } from 'lucide-react';
import {
  ConnectButton,
  useActiveAddress,
  useConnection,
} from "arweave-wallet-kit";

export const Navigation: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const activeAddress = useActiveAddress();
  const { connected } = useConnection();

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-white font-bold text-xl">aoPlay</Link>
            <div className="flex items-center space-x-2 text-yellow-400 text-sm">
              <Coins size={16} />
              <span>1,337 shards</span>
            </div>
          </div>
          <div className="flex space-x-8">
            <Link
              to="/marketplace"
              className={`flex items-center space-x-2 text-white/80 hover:text-white transition-colors ${
                isActive('/marketplace') ? 'text-white' : ''
              }`}
            >
              <ShoppingCartIcon size={20} />
              <span>Marketplace</span>
            </Link>
            <Link
              to="/docs"
              className={`flex items-center space-x-2 text-white/80 hover:text-white transition-colors ${
                isActive('/docs') ? 'text-white' : ''
              }`}
            >
              <CodeIcon size={20} />
              <span>Docs</span>
            </Link>
            <ConnectButton showBalance={false} />
          </div>
        </div>
      </div>
    </nav>
  )}