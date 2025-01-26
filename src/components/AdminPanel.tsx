import React, { useState } from 'react';
import { MenuItem } from '../types';
import { Settings } from 'lucide-react';

interface AdminPanelProps {
  menu: MenuItem[];
  onUpdatePrices: (updatedMenu: MenuItem[]) => void;
}

export default function AdminPanel({ menu, onUpdatePrices }: AdminPanelProps) {
  const [prices, setPrices] = useState<Record<string, number>>(
    menu.reduce((acc, item) => ({ ...acc, [item.id]: item.price }), {})
  );

  const handlePriceChange = (id: string, newPrice: string) => {
    const price = parseFloat(newPrice) || 0;
    setPrices((prev) => ({ ...prev, [id]: price }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedMenu = menu.map((item) => ({
      ...item,
      price: prices[item.id],
    }));
    onUpdatePrices(updatedMenu);
    alert('Prix mis à jour avec succès !');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-semibold text-gray-800">Administration des Prix</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {menu.map((item) => (
          <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <label htmlFor={`price-${item.id}`} className="block text-sm font-medium text-gray-700">
                {item.name}
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="number"
                  id={`price-${item.id}`}
                  value={prices[item.id]}
                  onChange={(e) => handlePriceChange(item.id, e.target.value)}
                  step="0.01"
                  min="0"
                  className="block w-full rounded-md border-gray-300 pl-3 pr-12 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 sm:text-sm">€</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Mettre à jour les prix
        </button>
      </form>
    </div>
  );
}