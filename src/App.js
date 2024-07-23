import Navbar from "./Components/Navbar";
import Products from "./Components/Product_features/Products";
import PlayersList from "./Components/PlayerList";
import Movies from "./Components/Movies/Movies";
import UserList from "./Components/UserList";
import MoviePage from "./Components/Movies/MoviePage";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route path="/players" element={<PlayersList />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/users" element={<UserList />} />
          
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
