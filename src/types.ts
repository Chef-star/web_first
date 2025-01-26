export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starter' | 'main' | 'dessert' | 'drink';
  imageUrl: string;
  available: boolean;
}

export interface DailyMenu {
  date: string;
  items: MenuItem[];
}

export interface SurveyFormData {
  firstName: string;
  lastName: string;
  email: string;
  preferredDish: 'starter' | 'main' | 'dessert' | 'drink';
  dietaryRestrictions: string[];
  triedDishes: string[];
  comments: string;
}