import {MovieDetails} from "./MovieDetails";
import {useEffect, useState} from "react";
import * as movieService from "../../services/movieService";
import {ContentBox} from "../mainComponents/contentComponents/ContentBox";
import {Title} from "../mainComponents/Title";


export const MoviesSection = () => {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {

        movieService.getMoviesByCriteria('popular', page)
            .then(result => setMovies(result));

    },[]);

    return (
        <div className="box">
            <Title title='All Popular Movies' />
            {movies.map(movie => <ContentBox key={movie.id} movie={movie} />)}
        </div>
    )


}