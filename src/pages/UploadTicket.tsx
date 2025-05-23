import { useWalletKit } from '@mysten/wallet-kit';
import { Navigate } from 'react-router-dom';

const UploadTicket = () => {
  const { isConnected } = useWalletKit();

  if (!isConnected) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Upload Ticket</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          <p className="text-gray-600">
            Upload your ticket details to create an NFT that can be swapped with other users.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-700">
              Your wallet is connected. You can now upload your ticket.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadTicket;