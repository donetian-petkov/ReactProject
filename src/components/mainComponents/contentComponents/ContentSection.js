import {ContentArea} from "./ContentArea";
import {useEffect, useState} from "react";
import * as movieService from '../../../services/movieService'

export const ContentSection = () => {

    const [moviesInTheatre, setMoviesInTheatre] = useState([]);
    const [moviesTopRated, setMoviesTopRated] = useState([]);
    const [moviesUpcoming, setMoviesUpcoming] = useState([]);


    useEffect(() => {
        movieService.getMoviesByCriteria('now_playing')
            .then(movies => {
                setMoviesInTheatre(movies);
            });

        movieService.getMoviesByCriteria('top_rated')
            .then(movies => {
                setMoviesTopRated(movies);
            });

        movieService.getMoviesByCriteria('upcoming')
            .then(movies => {
                setMoviesUpcoming(movies);
            });
    },[]);

    return (
        <div id="content">
            <ContentArea title='In Theaters' movies={moviesInTheatre}/>
            <ContentArea title='Top Rated' movies={moviesTopRated}/>
            <ContentArea title='Upcoming' movies={moviesUpcoming}/>
        </div>
    )
}
