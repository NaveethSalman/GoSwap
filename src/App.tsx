import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WalletKitProvider } from '@mysten/wallet-kit';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SwapTickets from './pages/SwapTickets';
import UploadTicket from './pages/UploadTicket';

function App() {
  return (
    <WalletKitProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/swap" element={<SwapTickets />} />
            <Route path="/upload" element={<UploadTicket />} />
          </Routes>
        </div>
      </Router>
    </WalletKitProvider>
  );
}