import Footer from './components/footer/Footer';
import { Header } from './components/header/Header';
import { SearchBar } from './components/searchBar/SearchBar';
import HomePage from './pages/HomePage';

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <HomePage />
      <Footer />
    </div>
  );
};
