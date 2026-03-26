import React from 'react';
import { Outlet } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export function Root() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
