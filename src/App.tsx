import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer';
import { Header } from './components/header/Header';
import { SearchBar } from './components/searchBar/SearchBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <SearchBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
      </Routes>

      <Footer />
    </div>
  );
};
