'use client';

import { useState, useEffect } from 'react';
import OverlayManagementCard from './components/overlay-management-card';
import { Overlay } from '@/app/types';

export default function MyOverlaysPage() {
  const { data: session } = { data: {} };
  const [overlays, setOverlays] = useState<Overlay[]>([
    {
      description: 'My First overlay',
      name: 'Gaming X1000',
      id: '1',
      price: 100,
      previewUrl: '',
      updatedAt: Date.toString(),
      isActive: false,
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // if (session) {
    //   fetch('/api/overlays/my-overlays')
    //     .then((response) => {
    //       if (!response.ok) throw new Error('Failed to fetch overlays');
    //       return response.json();
    //     })
    //     .then((data) => {
    //       setOverlays(data);
    //       setLoading(false);
    //     })
    //     .catch((error) => {
    //       setError(error.message);
    //       setLoading(false);
    //     });
    // }
  }, [session]);

  const handleActivate = async (overlayId) => {};

  const handleDelete = async (overlayId) => {};

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Overlays</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {overlays.map((overlay) => (
          <OverlayManagementCard
            key={overlay.id}
            overlay={overlay}
            onActivate={handleActivate}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {overlays.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-600 mb-4">You don't have any overlays yet.</p>
          <a
            href="/create-overlay"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Create New Overlay
          </a>
        </div>
      )}
    </div>
  );
}
