'use client';

import { useState, useEffect } from 'react';
// import { useSession } from 'next-auth/react';

export default function SettingsPage() {
  const { data: session } = { data: {} };
  const [settings, setSettings] = useState({
    twitchToken: '',
    alertDuration: 5000,
    soundEnabled: true,
    theme: 'dark',
  });
  const [isSaving, setIsSaving] = useState(false);

  // Load settings on mount
  useEffect(() => {
    if (session) {
      fetch('/api/settings')
        .then((res) => res.json())
        .then((data) => setSettings(data));
    }
  }, [session]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const response = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });

      if (!response.ok) throw new Error('Failed to save settings');
      alert('Settings saved successfully!');
    } catch (error) {
      alert(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-4xl py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Overlay Settings</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Twitch API Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Twitch Integration</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Twitch API Token
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  name="twitchToken"
                  value={settings.twitchToken}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your Twitch API token"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Get your token from the Twitch Developer Console
              </p>
            </div>
          </div>
        </div>

        {/* General Settings Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">General Settings</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Alert Duration (ms)
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="alertDuration"
                  value={settings.alertDuration}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="soundEnabled"
                  name="soundEnabled"
                  type="checkbox"
                  checked={settings.soundEnabled}
                  onChange={handleChange}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="soundEnabled"
                  className="font-medium text-gray-700"
                >
                  Enable Sounds
                </label>
                <p className="text-gray-500">
                  Play sounds for alerts and notifications
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Theme
              </label>
              <div className="mt-1">
                <select
                  name="theme"
                  value={settings.theme}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                  <option value="custom">Custom</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <button
            type="submit"
            disabled={isSaving}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isSaving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
      </form>
    </div>
  );
}
