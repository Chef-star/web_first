export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Entrée' | 'Plat' | 'dessert' | 'Boisson naturel';
  imageUrl: string;
  available: boolean;
}

export interface DailyMenu {
  date: string;
  items: MenuItem[];
}

export interface ClientSurveyData {
  deliveryTime: 'Matin' | 'Après-midi' | 'Soir';
  deliveryPrice: '2€' | '4€' | '5€';
  mealType: 'Sénégalais' | 'Européens' | 'Mixtes';
  orderFrequency: '1 à 2 fois' | '3 à 5 fois' | 'Plus de 5 fois';
  groupDelivery: boolean;
  communicationChannel: ('WhatsApp' | 'SMS' | 'Appels')[];
}

export interface ChefSurveyData {
  cuisineType: 'Plats sénégalais' | 'Goûter' | 'Autres';
  mealsPerDay: '1' | '2-3' | '3+';
  cookingTime: 'Matin' | 'Après-midi' | 'Soir';
  vegetarianOptions: boolean;
  professionalKitchen: boolean;
  availableDays: string[];
  hasTransport: boolean;
  paymentPreference: 'Par transaction' | 'Abonnement Fin de semaine' | 'Abonnement Fin de mois';
}