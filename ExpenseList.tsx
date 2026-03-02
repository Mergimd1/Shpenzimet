import React from 'react';
import { Trash2, ShoppingBag, Coffee, Home, Car, Heart, MoreHorizontal, ShoppingCart } from 'lucide-react';
import { Expense, Category } from '../types';
import { format } from 'date-fns';
import { sq } from 'date-fns/locale';

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

const CategoryIcon = ({ category }: { category: Category }) => {
  const props = { size: 18, className: "text-zinc-600" };
  switch (category) {
    case 'Ushqim': return <Coffee {...props} />;
    case 'Transport': return <Car {...props} />;
    case 'Qira': return <Home {...props} />;
    case 'Argëtim': return <ShoppingBag {...props} />;
    case 'Shëndetësi': return <Heart {...props} />;
    case 'Shopping': return <ShoppingCart {...props} />;
    default: return <MoreHorizontal {...props} />;
  }
};

export default function ExpenseList({ expenses, onDelete }: ExpenseListProps) {
  if (expenses.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-zinc-200">
        <p className="text-zinc-400">Nuk ka shpenzime të regjistruara ende.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-bottom border-zinc-100 bg-zinc-50/50">
              <th className="px-6 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Shpenzimi</th>
              <th className="px-6 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Kategoria</th>
              <th className="px-6 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Data</th>
              <th className="px-6 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider text-right">Shuma</th>
              <th className="px-6 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider text-right">Veprime</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {expenses.map((expense) => (
              <tr key={expense.id} className="hover:bg-zinc-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                      <CategoryIcon category={expense.category} />
                    </div>
                    <span className="font-medium text-zinc-900">{expense.description}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800">
                    {expense.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-zinc-500">
                  {format(new Date(expense.date), 'd MMM, yyyy', { locale: sq })}
                </td>
                <td className="px-6 py-4 text-right font-semibold text-zinc-900">
                  €{expense.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => onDelete(expense.id)}
                    className="p-2 text-zinc-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
