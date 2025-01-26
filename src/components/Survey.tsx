import React, { useState } from 'react';
import { ClientSurveyData, ChefSurveyData } from '../types';
import { ClipboardCheck, ChefHat, Users } from 'lucide-react';

const DAYS_OF_WEEK = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

export default function Survey() {
  const [surveyType, setSurveyType] = useState<'none' | 'client' | 'chef'>('none');
  const [clientData, setClientData] = useState<Partial<ClientSurveyData>>({});
  const [chefData, setChefData] = useState<Partial<ChefSurveyData>>({
    availableDays: [],
  });

  const handleClientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Données client soumises:', clientData);
    alert('Merci pour vos réponses !');
    setSurveyType('none');
  };

  const handleChefSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Données cuisinier soumises:', chefData);
    alert('Merci pour vos réponses !');
    setSurveyType('none');
  };

  if (surveyType === 'none') {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Choisissez votre profil</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => setSurveyType('client')}
            className="flex flex-col items-center p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
          >
            <Users className="w-12 h-12 text-orange-600 mb-2" />
            <span className="text-lg font-medium text-gray-800">Vous êtes client</span>
          </button>
          <button
            onClick={() => setSurveyType('chef')}
            className="flex flex-col items-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <ChefHat className="w-12 h-12 text-green-600 mb-2" />
            <span className="text-lg font-medium text-gray-800">Vous êtes cuisinier</span>
          </button>
        </div>
      </div>
    );
  }

  if (surveyType === 'client') {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center gap-2 mb-6">
          <ClipboardCheck className="w-6 h-6 text-orange-600" />
          <h2 className="text-2xl font-semibold text-gray-800">Questionnaire client</h2>
        </div>

        <form onSubmit={handleClientSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">À quelle heure souhaitez-vous être livré ?</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={clientData.deliveryTime || ''}
              onChange={(e) => setClientData({ ...clientData, deliveryTime: e.target.value as any })}
              required
            >
              <option value="">Sélectionnez une option</option>
              <option value="Matin">Matin</option>
              <option value="Après-midi">Après-midi</option>
              <option value="Soir">Soir</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Combien êtes-vous prêt à payer pour une livraison ?</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={clientData.deliveryPrice || ''}
              onChange={(e) => setClientData({ ...clientData, deliveryPrice: e.target.value as any })}
              required
            >
              <option value="">Sélectionnez une option</option>
              <option value="2€">2€</option>
              <option value="4€">4€</option>
              <option value="5€">5€</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Quels types de plats préférez-vous ?</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={clientData.mealType || ''}
              onChange={(e) => setClientData({ ...clientData, mealType: e.target.value as any })}
              required
            >
              <option value="">Sélectionnez une option</option>
              <option value="Sénégalais">Sénégalais</option>
              <option value="Européens">Européens</option>
              <option value="Mixtes">Mixtes</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Combien de fois par semaine commandez-vous généralement des repas ?</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={clientData.orderFrequency || ''}
              onChange={(e) => setClientData({ ...clientData, orderFrequency: e.target.value as any })}
              required
            >
              <option value="">Sélectionnez une option</option>
              <option value="1 à 2 fois">1 à 2 fois</option>
              <option value="3 à 5 fois">3 à 5 fois</option>
              <option value="Plus de 5 fois">Plus de 5 fois</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Acceptez-vous une livraison groupée avec d'autres étudiants ?</label>
            <div className="mt-2 space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-orange-600"
                  name="groupDelivery"
                  value="true"
                  onChange={(e) => setClientData({ ...clientData, groupDelivery: e.target.value === 'true' })}
                  required
                />
                <span className="ml-2">Oui</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-orange-600"
                  name="groupDelivery"
                  value="false"
                  onChange={(e) => setClientData({ ...clientData, groupDelivery: e.target.value === 'true' })}
                />
                <span className="ml-2">Non</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Quels sont vos canaux de communication préférés ?</label>
            <div className="grid grid-cols-2 gap-2">
              {['WhatsApp', 'SMS', 'Appels'].map((channel) => (
                <label key={channel} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-orange-600"
                    value={channel}
                    onChange={(e) => {
                      const currentChannels = clientData.communicationChannel || [];
                      const newChannels = e.target.checked
                        ? [...currentChannels, channel as any]
                        : currentChannels.filter((c) => c !== channel);
                      setClientData({ ...clientData, communicationChannel: newChannels });
                    }}
                  />
                  <span className="ml-2">{channel}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setSurveyType('none')}
              className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
            >
              Retour
            </button>
            <button
              type="submit"
              className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <ChefHat className="w-6 h-6 text-green-600" />
        <h2 className="text-2xl font-semibold text-gray-800">Questionnaire pour les cuisiniers</h2>
      </div>

      <form onSubmit={handleChefSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Quel type de cuisine proposez-vous ?</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            value={chefData.cuisineType || ''}
            onChange={(e) => setChefData({ ...chefData, cuisineType: e.target.value as any })}
            required
          >
            <option value="">Sélectionnez une option</option>
            <option value="Plats sénégalais">Plats sénégalais</option>
            <option value="Cuisine internationale">Goûter</option>
            <option value="Autres">Autres</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Combien de plats pouvez-vous préparer par jour ?</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            value={chefData.mealsPerDay || ''}
            onChange={(e) => setChefData({ ...chefData, mealsPerDay: e.target.value as any })}
            required
          >
            <option value="">Sélectionnez une option</option>
            <option value="1-5">1</option>
            <option value="5-10">1-2</option>
            <option value="10+">3+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">À quelle heure pouvez-vous commencer à cuisiner ?</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            value={chefData.cookingTime || ''}
            onChange={(e) => setChefData({ ...chefData, cookingTime: e.target.value as any })}
            required
          >
            <option value="">Sélectionnez une option</option>
            <option value="Matin">Matin</option>
            <option value="Après-midi">Après-midi</option>
            <option value="Soir">Soir</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Proposez-vous des options végétariennes ou véganes ?</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-green-600"
                name="vegetarianOptions"
                value="true"
                onChange={(e) => setChefData({ ...chefData, vegetarianOptions: e.target.value === 'true' })}
                required
              />
              <span className="ml-2">Oui</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-green-600"
                name="vegetarianOptions"
                value="false"
                onChange={(e) => setChefData({ ...chefData, vegetarianOptions: e.target.value === 'true' })}
              />
              <span className="ml-2">Non</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Disposez-vous d'une cuisine professionnelle ?</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-green-600"
                name="professionalKitchen"
                value="true"
                onChange={(e) => setChefData({ ...chefData, professionalKitchen: e.target.value === 'true' })}
                required
              />
              <span className="ml-2">Oui</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-green-600"
                name="professionalKitchen"
                value="false"
                onChange={(e) => setChefData({ ...chefData, professionalKitchen: e.target.value === 'true' })}
              />
              <span className="ml-2">Non</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Quels jours de la semaine êtes-vous disponible pour cuisiner ?</label>
          <div className="grid grid-cols-2 gap-2">
            {DAYS_OF_WEEK.map((day) => (
              <label key={day} className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-green-600"
                  value={day}
                  onChange={(e) => {
                    const currentDays = chefData.availableDays || [];
                    const newDays = e.target.checked
                      ? [...currentDays, day]
                      : currentDays.filter((d) => d !== day);
                    setChefData({ ...chefData, availableDays: newDays });
                  }}
                />
                <span className="ml-2">{day}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Avez-vous un moyen de transport pour livrer les commandes ?</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-green-600"
                name="hasTransport"
                value="true"
                onChange={(e) => setChefData({ ...chefData, hasTransport: e.target.value === 'true' })}
                required
              />
              <span className="ml-2">Oui</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-green-600"
                name="hasTransport"
                value="false"
                onChange={(e) => setChefData({ ...chefData, hasTransport: e.target.value === 'true' })}
              />
              <span className="ml-2">Non</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Acceptez-vous d'être payé par transaction ou en fin de semaine ?</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            value={chefData.paymentPreference || ''}
            onChange={(e) => setChefData({ ...chefData, paymentPreference: e.target.value as any })}
            required
          >
            <option value="">Sélectionnez une option</option>
            <option value="Par transaction">Par transaction</option>
            <option value="Fin de semaine">Abonnement Fin de semaine</option>
            <option value="Fin de semaine">Abonnement Fin de mois</option>

          </select>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setSurveyType('none')}
            className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
          >
            Retour
          </button>
          <button
            type="submit"
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}