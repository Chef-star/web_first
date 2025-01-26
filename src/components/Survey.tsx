import React, { useState } from 'react';
import { SurveyFormData } from '../types';
import { ClipboardCheck } from 'lucide-react';

const dietaryOptions = [
  'Sans gluten',
  'Végétarien',
  'Végétalien',
  'Casher',
  'Halal',
  'Sans lactose',
];

export default function Survey() {
  const [formData, setFormData] = useState<SurveyFormData>({
    firstName: '',
    lastName: '',
    email: '',
    preferredDish: 'main',
    dietaryRestrictions: [],
    triedDishes: [],
    comments: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    alert('Merci pour votre retour !');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <ClipboardCheck className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-semibold text-gray-800">Questionnaire Client</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Prénom</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Type de Plat Préféré</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.preferredDish}
            onChange={(e) => setFormData({ ...formData, preferredDish: e.target.value as any })}
          >
            <option value="starter">Entrée</option>
            <option value="main">Plat Principal</option>
            <option value="dessert">Dessert</option>
            <option value="drink">Boisson</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Restrictions Alimentaires
          </label>
          <div className="grid grid-cols-2 gap-2">
            {dietaryOptions.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={formData.dietaryRestrictions.includes(option)}
                  onChange={(e) => {
                    const newRestrictions = e.target.checked
                      ? [...formData.dietaryRestrictions, option]
                      : formData.dietaryRestrictions.filter((item) => item !== option);
                    setFormData({ ...formData, dietaryRestrictions: newRestrictions });
                  }}
                />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Commentaires Supplémentaires</label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={4}
            value={formData.comments}
            onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Envoyer le Questionnaire
        </button>
      </form>
    </div>
  );
}