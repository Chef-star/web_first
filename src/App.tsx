import React, { useState } from 'react';
import Survey from './components/Survey';
import DailyMenu from './components/DailyMenu';
import AdminPanel from './components/AdminPanel';
import { MenuItem } from './types';

const initialMenu: MenuItem[] = [
  {
    id: '1',
    name: 'Thiebou Dieun',
    description: 'Riz au poisson avec légumes, plat national sénégalais préparé avec du riz brisé et du poisson frais',
    price: 15.50,
    category: 'main',
    imageUrl: 'https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?auto=format&fit=crop&q=80&w=500',
    available: true,
  },
  {
    id: '2',
    name: 'Mafé',
    description: 'Sauce à base de viande mijotée dans une sauce aux arachides, servi avec du riz',
    price: 14.00,
    category: 'main',
    imageUrl: 'https://images.unsplash.com/photo-1515516969-d4008cc6241a?auto=format&fit=crop&q=80&w=500',
    available: true,
  },
  {
    id: '3',
    name: 'Mbaxal',
    description: 'Riz blanc accompagné de poisson fumé et de légumes, parfumé aux feuilles de laurier',
    price: 13.50,
    category: 'main',
    imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=500',
    available: true,
  },
];

function App() {
  const [showSurvey, setShowSurvey] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [menu, setMenu] = useState<MenuItem[]>(initialMenu);

  const handleUpdatePrices = (updatedMenu: MenuItem[]) => {
    setMenu(updatedMenu);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Agne you Khéré</h1>
            <button
              onClick={() => setShowAdmin(!showAdmin)}
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
            >
              {showAdmin ? 'Retour au Menu' : 'Administration'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        {showAdmin ? (
          <AdminPanel menu={menu} onUpdatePrices={handleUpdatePrices} />
        ) : (
          <>
            <DailyMenu menu={menu} />
            
            <div className="flex justify-center">
              <button
                onClick={() => setShowSurvey(!showSurvey)}
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-lg font-medium"
              >
                {showSurvey ? 'Masquer le Questionnaire' : 'Remplir le Questionnaire'}
              </button>
            </div>

            {showSurvey && <Survey />}
          </>
        )}
      </main>

      <footer className="bg-white mt-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Restaurant Sénégalais. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;