import {useContext, useEffect, useState} from "react";
import * as movieService from "../../services/movieService";
import {ContentBox} from "../mainComponents/contentComponents/ContentBox";
import './MovieSection.css';

export const MoviesSection = (props) => {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);


    useEffect(() => {
        movieService.getMoviesByCriteria(props.criteria, page)
            .then(movies => setMovies(movies.results));
    },[props.criteria]);

    return (
        <div className="box">
            {movies.map(movie => <ContentBox key={movie.id} movie={movie} />)}
        </div>
    )


}