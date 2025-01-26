import React from 'react';
import { MenuItem } from '../types';
import { Utensils } from 'lucide-react';

interface DailyMenuProps {
  menu: MenuItem[];
}

export default function DailyMenu({ menu }: DailyMenuProps) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center gap-2 mb-8">
        <Utensils className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-semibold text-gray-800">Menu du Jour</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menu.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <span className="text-lg font-medium text-blue-600">
                  {item.price.toFixed(2)} €
                </span>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Commander
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}