import React, { useState, useEffect } from 'react';
import { Wallet, Bell, Search, User } from 'lucide-react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import SummaryCards from './components/SummaryCards';
import CategoryChart from './components/CategoryChart';
import { Expense } from './types';

export default function App() {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem('expenses');
    if (saved) return JSON.parse(saved);
    
    // Sample data for first load
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    
    return [
      { id: '1', amount: 4.50, category: 'Ushqim', description: 'Kafe dhe Mëngjes', date: today },
      { id: '2', amount: 12.00, category: 'Transport', description: 'Karburant', date: today },
      { id: '3', amount: 450.00, category: 'Qira', description: 'Qiraja e muajit', date: yesterday },
      { id: '4', amount: 25.00, category: 'Shopping', description: 'Bluzë e re', date: yesterday },
    ];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (newExpense: Omit<Expense, 'id'>) => {
    const expense: Expense = {
      ...newExpense,
      id: Math.random().toString(36).substr(2, 9),
    };
    setExpenses([expense, ...expenses]);
  };

  const deleteExpense = (id: string) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-zinc-900 font-sans selection:bg-black selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Wallet className="text-white" size={18} />
              </div>
              <span className="text-lg font-bold tracking-tight">Gjurmuesi</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <nav className="flex gap-4">
                <a href="#" className="text-sm font-medium text-zinc-900">Dashboard</a>
                <a href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Raportet</a>
                <a href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Buxheti</a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
                <Search size={20} />
              </button>
              <button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200">
                <User size={18} className="text-zinc-600" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Përshëndetje, Mergim</h1>
            <p className="text-zinc-500">Këtu është përmbledhja e shpenzimeve tuaja ditore.</p>
          </div>
          <ExpenseForm onAdd={addExpense} />
        </div>

        <SummaryCards expenses={expenses} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-zinc-900">Transaksionet e Fundit</h2>
              <button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Shiko të gjitha</button>
            </div>
            <ExpenseList expenses={expenses} onDelete={deleteExpense} />
          </div>
          
          <div className="space-y-8">
            <CategoryChart expenses={expenses} />
            
            <div className="bg-zinc-900 p-6 rounded-2xl text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-2">Këshillë Financiare</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Duke gjurmuar shpenzimet tuaja të vogla ditore, ju mund të kurseni deri në 15% të të ardhurave tuaja mujore.
                </p>
                <button className="mt-4 text-sm font-semibold underline underline-offset-4 hover:text-zinc-200 transition-colors">
                  Mëso më shumë
                </button>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-zinc-100 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 opacity-50">
            <Wallet size={16} />
            <span className="text-xs font-semibold uppercase tracking-widest">Gjurmuesi i Shpenzimeve © 2026</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-xs font-semibold text-zinc-400 hover:text-zinc-900 uppercase tracking-widest transition-colors">Privatësia</a>
            <a href="#" className="text-xs font-semibold text-zinc-400 hover:text-zinc-900 uppercase tracking-widest transition-colors">Kushtet</a>
            <a href="#" className="text-xs font-semibold text-zinc-400 hover:text-zinc-900 uppercase tracking-widest transition-colors">Mbështetja</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
