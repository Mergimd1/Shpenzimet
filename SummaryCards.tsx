import React from 'react';
import { TrendingUp, CreditCard, Calendar, Wallet } from 'lucide-react';
import { Expense } from '../types';
import { cn } from '../lib/utils';

interface SummaryCardsProps {
  expenses: Expense[];
}

export default function SummaryCards({ expenses }: SummaryCardsProps) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  
  const today = new Date().toISOString().split('T')[0];
  const todayTotal = expenses
    .filter(e => e.date === today)
    .reduce((sum, e) => sum + e.amount, 0);

  const thisMonth = new Date().getMonth();
  const thisYear = new Date().getFullYear();
  const monthTotal = expenses
    .filter(e => {
      const d = new Date(e.date);
      return d.getMonth() === thisMonth && d.getFullYear() === thisYear;
    })
    .reduce((sum, e) => sum + e.amount, 0);

  const cards = [
    {
      title: 'Total Shpenzime',
      value: `€${total.toFixed(2)}`,
      icon: Wallet,
      color: 'bg-zinc-900',
      textColor: 'text-white'
    },
    {
      title: 'Sot',
      value: `€${todayTotal.toFixed(2)}`,
      icon: Calendar,
      color: 'bg-white',
      textColor: 'text-zinc-900'
    },
    {
      title: 'Këtë Muaj',
      value: `€${monthTotal.toFixed(2)}`,
      icon: TrendingUp,
      color: 'bg-white',
      textColor: 'text-zinc-900'
    },
    {
      title: 'Transaksione',
      value: expenses.length.toString(),
      icon: CreditCard,
      color: 'bg-white',
      textColor: 'text-zinc-900'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map((card, i) => (
        <div 
          key={i} 
          className={cn(
            "p-6 rounded-2xl border border-zinc-100 shadow-sm flex flex-col justify-between h-32",
            card.color,
            card.textColor
          )}
        >
          <div className="flex justify-between items-start">
            <span className={cn("text-xs font-semibold uppercase tracking-wider opacity-70")}>
              {card.title}
            </span>
            <card.icon size={18} className="opacity-70" />
          </div>
          <div className="text-2xl font-bold tracking-tight">
            {card.value}
          </div>
        </div>
      ))}
    </div>
  );
}
