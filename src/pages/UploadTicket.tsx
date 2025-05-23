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
        <p className="text-gray-600">
          Ticket upload implementation will go here...
        </p>
      </div>
    </div>
  );
};

export default UploadTicket;