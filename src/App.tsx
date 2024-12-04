import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { LandingPage } from './pages/LandingPage';
import { Marketplace } from './pages/Marketplace';
import { Documentation } from './pages/Documentation';
import { ArweaveWalletKit } from "arweave-wallet-kit";
import { Footer } from './components/footer';
import {nabar} from './components/Navigation';

function App() {
  return (
    <Router>
      <ArweaveWalletKit
          config={{
            permissions: [
              "ACCESS_ADDRESS",
              "ACCESS_PUBLIC_KEY",
              "SIGN_TRANSACTION",
              "DISPATCH",
            ],
            ensurePermissions: true,
          }}
          theme={{
            displayTheme: "light",
          }}
        >
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/docs" element={<Documentation />} />
      </Routes>
      <Footer/>
      </ArweaveWalletKit>
    </Router>
  );
}

export default App;