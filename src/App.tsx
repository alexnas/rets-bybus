import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Footer from './components/footer/Footer';
import { Header } from './components/header/Header';
import { SearchBar } from './components/searchBar/SearchBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import CompaniesPage from './pages/CompaniesPage';
import RoutesPage from './pages/RoutesPage';
import SupportPage from './pages/SupportPage';
import { getRoutesAsync } from './store/slices/routesSlice';
import { getCompaniesAsync } from './store/slices/companiesSlice';
import { getCitiesAsync } from './store/slices/citiesSlice';
import { createBusRouteEndpoint } from './api/createEndpoint';
import { initialSearchParams } from './constants/searchContants';
import { useFilterReset } from './components/sidebar/useFilterResetHook';
import { useAppSelector } from './store/hooks';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const { resetFilter } = useFilterReset();
  const routes = useAppSelector((state) => state.routes.routes);

  useEffect(() => {
    resetFilter();
  }, [routes, resetFilter]);

  useEffect(() => {
    dispatch(getRoutesAsync(createBusRouteEndpoint(initialSearchParams)));
    dispatch(getCompaniesAsync());
    dispatch(getCitiesAsync());
  }, [dispatch]);

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
