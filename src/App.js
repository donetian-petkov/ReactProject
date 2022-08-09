import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Main} from "./components/mainComponents/Main";
import {Route, Routes} from "react-router-dom";
import {MoviesSection} from "./components/movieComponents/MoviesSection";
import {MovieDetails} from "./components/movieComponents/MovieDetails";
import {AuthComponent} from "./components/authComponents/AuthComponent";
import {ArticlePage} from "./components/articlesComponents/ArticlePage";
import {ReviewPage} from "./components/articlesComponents/ReviewPage";
import {UserContext} from './contexts/userContext';
import {useLocalStorage} from "./components/hooks/userLocalStorage";
import { ProtectedRoute} from './components/authComponents/ProtectedRoute'
import {Logout} from "./components/authComponents/Logout";

function App() {

    const [auth, setAuth] = useLocalStorage('auth', {});

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };

    return (

        <UserContext.Provider value={{user: auth, userLogin, userLogout}}>
            <div id="shell">

                <Header/>

                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/now_playing' element={<MoviesSection criteria='now_playing'/>}/>
                    <Route path='/top_rated' element={<MoviesSection criteria='top_rated'/>}/>
                    <Route path='/upcoming' element={<MoviesSection criteria='upcoming'/>}/>
                    <Route path='/movie/:movieId' element={<MovieDetails/>}/>
                    <Route path='/login' element={<AuthComponent/>}/>
                    <Route path='/news' element={<ArticlePage/>} meta={{ auth: true }}/>
                    <Route path='/reviews' element={<ReviewPage/>}/>
                    <Route path='/comments' element={
                        <ProtectedRoute user={auth}>
                            <h2>Comments</h2>
                        </ProtectedRoute>}
                    />

                    <Route element={<ProtectedRoute user={auth} />}>
                        <Route path="/comments" element={<h2>Comments</h2>} />
                        <Route path="/ratings" element={<h2>Ratings</h2>} />
                        <Route path='/logout' element={<Logout/>}/>
                    </Route>
                </Routes>
                <Footer/>

            </div>
            </UserContext.Provider>
            );
            }

            export default App;
