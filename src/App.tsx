import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import ParticleBg from "./components/Particles";
import "./App.css";
import { Auth } from "./pages/auth";
import { Home } from "./pages/home";
import { Movie } from "./pages/movie";
import { TvShow } from "./pages/tvshow";
import { Rated } from "./pages/rated";

function App() {
  return (
    <div>
      <ParticleBg />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/rated" element={<Rated />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/tvshow/:id" element={<TvShow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
