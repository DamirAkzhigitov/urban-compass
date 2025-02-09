import React from 'react';
import { Overlay } from '@/app/types';

interface OverlayManagementCardProps {
  overlay: Overlay;
  onActivate: (id: string) => void;
  onDelete: (id: string) => void;
}

const OverlayManagementCard: React.FC<OverlayManagementCardProps> = ({
  overlay,
  onActivate,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{overlay.name}</h2>
        <p className="text-gray-600 mb-4">{overlay.description}</p>

        <div className="flex items-center justify-between">
          <span
            className={`px-2 py-1 rounded-full text-sm ${
              overlay.isActive
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {overlay.isActive ? 'Active' : 'Inactive'}
          </span>

          <div className="flex space-x-2">
            <button
              onClick={() => onActivate(overlay.id)}
              disabled={overlay.isActive}
              className={`px-3 py-1 text-sm rounded-md ${
                overlay.isActive
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {overlay.isActive ? 'Activated' : 'Activate'}
            </button>

            <button
              onClick={() => onDelete(overlay.id)}
              className="px-3 py-1 text-sm bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayManagementCard;
