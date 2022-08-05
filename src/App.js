import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Main} from "./components/mainComponents/Main";
import {Route, Routes} from "react-router-dom";
import {MoviesSection} from "./components/movieComponents/MoviesSection";

function App() {
  return (
    <div id="shell">

        <Header />

        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/movies' element={<MoviesSection />} />
            <Route path='/pricing' element={<h2>Pricing Page</h2>} />
            <Route path='/contact' element={<h2>Contact Page</h2>} />
        </Routes>

        <Footer />

    </div>
  );
}

export default App;
