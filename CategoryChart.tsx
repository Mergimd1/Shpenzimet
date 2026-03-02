import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Expense, CATEGORY_COLORS, Category } from '../types';

interface CategoryChartProps {
  expenses: Expense[];
}

export default function CategoryChart({ expenses }: CategoryChartProps) {
  const data = expenses.reduce((acc, expense) => {
    const existing = acc.find((item) => item.name === expense.category);
    if (existing) {
      existing.value += expense.amount;
    } else {
      acc.push({ name: expense.category, value: expense.amount });
    }
    return acc;
  }, [] as { name: string; value: number }[]);

  if (data.length === 0) return null;

  return (
    <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm h-[400px]">
      <h3 className="text-lg font-semibold text-zinc-900 mb-6">Shpenzimet sipas Kategorisë</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="45%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={CATEGORY_COLORS[entry.name as Category]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: number) => `€${value.toFixed(2)}`}
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
          <Legend verticalAlign="bottom" height={36}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
