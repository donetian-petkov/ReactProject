import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Main} from "./components/mainComponents/Main";
import {Route, Routes} from "react-router-dom";
import {MoviesSection} from "./components/movieComponents/MoviesSection";
import {MovieDetails} from "./components/movieComponents/MovieDetails";
import {LoginComponent} from "./components/authComponents/LoginComponent";
import {ArticlePage} from "./components/articlesComponents/ArticlePage";
import {ReviewPage} from "./components/articlesComponents/ReviewPage";
import {UserContext} from './contexts/userContext';
import {useLocalStorage} from "./components/hooks/userLocalStorage";


function App() {

    const [auth, setAuth] = useLocalStorage('auth', {});

    const userLogin = (authData) => {
        console.log('App ', authData);
        setAuth(authData);
    };

    return (

        <UserContext.Provider value={{user: auth, userLogin}}>
            <div id="shell">

                <Header/>

                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/now_playing' element={<MoviesSection criteria='now_playing'/>}/>
                    <Route path='/top_rated' element={<MoviesSection criteria='top_rated'/>}/>
                    <Route path='/upcoming' element={<MoviesSection criteria='upcoming'/>}/>
                    <Route path='/movie/:movieId' element={<MovieDetails/>}/>
                    <Route path='/login' element={<LoginComponent/>}/>
                    <Route path='/news' element={<ArticlePage/>}/>
                    <Route path='/reviews' element={<ReviewPage/>}/>

                </Routes>
                <Footer/>

            </div>
            </UserContext.Provider>
            );
            }

            export default App;
