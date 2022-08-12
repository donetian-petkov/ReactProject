import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Main} from "./components/mainComponents/Main";
import {Route, Routes} from "react-router-dom";
import {MoviesSection} from "./components/movieComponents/MoviesSection";
import {MovieDetails} from "./components/movieComponents/MovieDetails";
import {AuthComponent} from "./components/authComponents/AuthComponent";
import {NewsPage} from "./components/articlesComponents/NewsPage";
import {UserContext} from './contexts/userContext';
import {useLocalStorage} from "./hooks/userLocalStorage";
import { ProtectedRoute} from './components/authComponents/ProtectedRoute'
import {Logout} from "./components/authComponents/Logout";
import {Search} from "./components/searchComponent/Search";
import {AddReview} from "./components/reviewComponents/AddReview";
import {ReviewPage} from "./components/reviewComponents/ReviewPage";
import {useEffect, useState} from "react";
import * as reviewService from "./services/reviewService";
import {ReviewContext} from "./contexts/reviewContext";
import {PersonalReviews} from "./components/reviewComponents/PersonalReviews";

function App() {

    const [auth, setAuth] = useLocalStorage('auth', {});

    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        reviewService.getAllReviews()
            .then(results => {
                for (const object of results) {
                    // Access the Parse Object attributes using the .GET method
                    const reviewId = object.get('objectId');
                    const reviewText = object.get('reviewText');
                    const rating = object.get('rating');
                    const movieId = object.get('movieId');
                    const createdAt = object.get('createdAt');
                    const username = object.get('username');

                    const review = {reviewId, reviewText , rating, movieId, createdAt, username};

                    setReviews(prevState => ([
                        ...prevState,
                        review
                    ]));
                }
            });

    },[])

    const userLogin = (authData) => {

        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };


    const getIsLoggedIn = () => {

        return Object.keys(auth).length !== 0;

    };

    return (

        <UserContext.Provider value={{user: auth, userLogin, userLogout, getIsLoggedIn}}>
            <div id="shell">

                <Header/>

                <ReviewContext.Provider value={{reviews}}>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/now_playing' element={<MoviesSection criteria='now_playing'/>}/>
                    <Route path='/top_rated' element={<MoviesSection criteria='top_rated'/>}/>
                    <Route path='/upcoming' element={<MoviesSection criteria='upcoming'/>}/>
                    <Route path='/movie/:movieId' element={<MovieDetails/>}/>
                    <Route path='/login' element={<AuthComponent/>}/>
                    <Route path='/news' element={<NewsPage/>}/>
                    <Route path='/reviews' element={<ReviewPage/>}/>
                    <Route element={<ProtectedRoute user={auth} />}>
                        <Route path='/logout' element={<Logout/>}/>
                        <Route path='/addReview/:movieId' element={<AddReview/>}/>
                        <Route path='/reviews/:userId' element={<PersonalReviews/>}/>
                    </Route>
                    <Route path='/search/:searchWords' element={<Search />} />
                </Routes>
                </ReviewContext.Provider>
                <Footer/>

            </div>
            </UserContext.Provider>
            );
            }

            export default App;
