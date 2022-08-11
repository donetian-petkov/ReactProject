import {useEffect, useState} from "react";
import * as movieService from '../../services/movieService'
import {ContentBox} from "../mainComponents/contentComponents/ContentBox";
import {useParams} from "react-router";

export const Search = (props) => {

    const [movies, setMovies] = useState([]);
    const {searchWords} = useParams();


    useEffect(() => {

        movieService.getMovieByName(searchWords)
            .then(result =>
            setMovies(result.results));

    }, []);

    console.log()

    return (
        <div className="box">
            {movies?.slice(0,21).map(movie => <ContentBox key={movie.id} movie={movie}/>)}
        </div>
    )


};