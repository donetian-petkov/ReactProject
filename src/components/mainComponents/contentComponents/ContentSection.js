import {ContentArea} from "./ContentArea";
import { useEffect, useState} from "react";
import * as movieService from '../../../services/movieService'

export const ContentSection = () => {

    const [moviesInTheatre, setMoviesInTheatre] = useState([]);
    const [moviesTopRated, setMoviesTopRated] = useState([]);
    const [moviesUpcoming, setMoviesUpcoming] = useState([]);


    useEffect(() => {

        movieService.getMoviesByCriteria('now_playing')
            .then(movies => {
                setMoviesInTheatre(movies.results);
            });

        movieService.getMoviesByCriteria('top_rated')
            .then(movies => {
                setMoviesTopRated(movies.results);
            });

        movieService.getMoviesByCriteria('upcoming')
            .then(movies => {
                setMoviesUpcoming(movies.results);
            });
    },[]);

    return (
        <div id="content">
            <ContentArea title='In Theaters' criteria='now_playing' movies={moviesInTheatre}/>
            <ContentArea title='Top Rated' criteria='top_rated' movies={moviesTopRated}/>
            <ContentArea title='Upcoming' criteria='upcoming' movies={moviesUpcoming}/>
        </div>
    )
}
