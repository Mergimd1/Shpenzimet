export interface Expense {
  id: string;
  amount: number;
  category: Category;
  description: string;
  date: string;
}

export type Category = 
  | 'Ushqim' 
  | 'Transport' 
  | 'Qira' 
  | 'Argëtim' 
  | 'Shëndetësi' 
  | 'Shopping' 
  | 'Tjera';

export const CATEGORIES: Category[] = [
  'Ushqim',
  'Transport',
  'Qira',
  'Argëtim',
  'Shëndetësi',
  'Shopping',
  'Tjera'
];

export const CATEGORY_COLORS: Record<Category, string> = {
  'Ushqim': '#10b981', // emerald-500
  'Transport': '#3b82f6', // blue-500
  'Qira': '#f59e0b', // amber-500
  'Argëtim': '#8b5cf6', // violet-500
  'Shëndetësi': '#ef4444', // red-500
  'Shopping': '#ec4899', // pink-500
  'Tjera': '#6b7280', // gray-500
};
