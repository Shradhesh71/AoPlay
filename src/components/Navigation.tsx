"use client";

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCartIcon, CodeIcon, Coins } from "lucide-react";
import {
  ConnectButton,
  useActiveAddress,
  useConnection,
} from "arweave-wallet-kit";
import { messageResult } from "../lib/utlis";

export const Navigation: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const activeAddress = useActiveAddress();
  const [loading, setLoading] = useState(false);
  const { connected } = useConnection();
  const [playerScore, setPlayerScore] = useState(null);

  const fetchPlayerDetail = async () => {
    const tags = [{ name: "Action", value: "Get-Player-Profile" }];

    const { Messages, Spawns, Output, Error } = await messageResult(
      "40yZY0aeTTOmkGqqRPH-jAT26acBfyClVgodD_9fTu4",
      tags
    );
    console.log("Messages[0].Data: ",Messages[0].Data)
    const player = Messages[0].Data;
    const parsedPlayer = JSON.parse(player);
    setPlayerScore(parsedPlayer[0]?.publicPoints);
    setLoading(true);
  };

  useEffect(() => {
    fetchPlayerDetail();
  }, [activeAddress]);

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-white font-bold text-xl">
              aoPlay
            </Link>
            <div className="flex items-center space-x-2 text-yellow-400 text-sm">
              {activeAddress && connected && loading ? (
                <button
                type="button"
                className="text-white bg-gradient-to-r flex from-gray-800 via-black to-gray-900 hover:bg-gradient-to-br hover:from-black hover:via-gray-800 hover:to-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-6 py-3 text-center mb-2 shadow-lg shadow-gray-900 transition-transform transform hover:scale-105"
                >
                {playerScore} {"  "}<Coins size={16} className="text-yellow-400"/> 
              </button>
              
            ) : (
              ""
            )}
            
            </div>
          </div>
          <div className="flex space-x-8">
            <Link
              to="/marketplace"
              className={`flex items-center space-x-2 text-white/80 hover:text-white transition-colors ${
                isActive("/marketplace") ? "text-white" : ""
              }`}
            >
              <ShoppingCartIcon size={20} />
              <span>Marketplace</span>
            </Link>
            <Link
              to="/docs"
              className={`flex items-center space-x-2 text-white/80 hover:text-white transition-colors ${
                isActive("/docs") ? "text-white" : ""
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
  );
};
