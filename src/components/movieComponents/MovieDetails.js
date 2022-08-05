import { useParams } from 'react-router';
import {useEffect, useState} from "react";
import * as movieService from '../../services/movieService'

export const MovieDetails = (props) => {

    const { movieId } = useParams();

    const [movie, setMovie] = useState({});

    useEffect(() => {
        movieService.getMovie(movieId)
            .then(movie => setMovie(movie));
    },[]);

    const imageUrl = `https://image.tmdb.org/t/p/w500`;

    return (
        <div className='movie'>
            <div className="movie-image">
                <img src={`${imageUrl}/${movie?.poster_path}`} alt=""/>
            </div>
            <div className='content'>
                <h1>{movie?.original_title}</h1>
                <br/>
                <p>{movie?.overview}</p>
            </div>
            <div className="rating">
                <p>RATING</p>
                <div className="stars">
                    <div className="stars-in"></div>
                </div>
                <span className="comments">12</span></div>
        </div>
    )

}