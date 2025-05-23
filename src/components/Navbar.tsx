import { Link } from 'react-router-dom';
import { ConnectButton } from '@mysten/wallet-kit';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              GoSwap
            </Link>
            <div className="ml-10 flex space-x-4">
              <Link to="/swap" className="text-gray-600 hover:text-gray-900 px-3 py-2">
                Swap Tickets
              </Link>
              <Link to="/upload" className="text-gray-600 hover:text-gray-900 px-3 py-2">
                Upload Ticket
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <ConnectButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;