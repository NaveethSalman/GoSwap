import { useWalletKit } from '@mysten/wallet-kit';
import { Link } from 'react-router-dom';

const Home = () => {
  const { isConnected } = useWalletKit();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to GoSwap
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Securely swap tickets as NFTs through smart contracts on the Sui network
        </p>
        {!isConnected ? (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-yellow-700">
              Connect your Sui wallet to start swapping tickets
            </p>
          </div>
        ) : (
          <div className="flex justify-center space-x-4">
            <Link
              to="/upload"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
            >
              Upload Ticket
            </Link>
            <Link
              to="/swap"
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
            >
              Swap Tickets
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;