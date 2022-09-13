import './App.css';
import MovieList from './components/movieList/MovieList';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';

function App() {
  return (
    <div>
     <Navbar />
     <Search />
     <MovieList />
    </div>
  );
}

export default App;
