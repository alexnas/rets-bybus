import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer';
import { Header } from './components/header/Header';
import { SearchBar } from './components/searchBar/SearchBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import CompaniesPage from './pages/CompaniesPage';
import RoutesPage from './pages/RoutesPage';
import SupportPage from './pages/SupportPage';

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <SearchBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='companies' element={<CompaniesPage />} />
        <Route path='routes' element={<RoutesPage />} />
        <Route path='support' element={<SupportPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
};
