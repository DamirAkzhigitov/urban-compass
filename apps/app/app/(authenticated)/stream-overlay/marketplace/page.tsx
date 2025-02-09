'use client';

import { useState } from 'react';
import OverlayCard from './components/overlay-card';

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    rating: 0,
  });

  // Example data - replace with real data from API
  const overlays = [
    {
      id: 1,
      name: 'Modern Gaming Overlay',
      description: 'Clean and modern overlay for gaming streams',
      price: 9.99,
      rating: 4.5,
      previewUrl: '/previews/1',
      imageUrl: '/images/overlays/1.png',
      tags: ['gaming', 'modern', 'minimal'],
    },
    // Add more overlays...
  ];

  const filteredOverlays = overlays.filter((overlay) => {
    return (
      overlay.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filters.category === 'all' || overlay.tags.includes(filters.category)) &&
      (filters.priceRange === 'all' ||
        (filters.priceRange === 'free'
          ? overlay.price === 0
          : filters.priceRange === 'paid'
            ? overlay.price > 0
            : true)) &&
      overlay.rating >= filters.rating
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Overlay Marketplace</h1>

      {/* Search and Filters */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <input
          type="text"
          placeholder="Search overlays..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded-md"
        />

        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="p-2 border rounded-md"
        >
          <option value="all">All Categories</option>
          <option value="gaming">Gaming</option>
          <option value="minimal">Minimal</option>
          <option value="modern">Modern</option>
          {/* Add more categories */}
        </select>

        <select
          value={filters.priceRange}
          onChange={(e) =>
            setFilters({ ...filters, priceRange: e.target.value })
          }
          className="p-2 border rounded-md"
        >
          <option value="all">All Prices</option>
          <option value="free">Free</option>
          <option value="paid">Paid</option>
          <option value="under10">Under $10</option>
          <option value="10-20">$10 - $20</option>
          {/* Add more price ranges */}
        </select>
      </div>

      {/* Overlay Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOverlays.map((overlay) => (
          <OverlayCard key={overlay.id} overlay={overlay} />
        ))}
      </div>
    </div>
  );
}
