import { useParams } from 'react-router';
import {useEffect, useState} from "react";
import * as movieService from '../../services/movieService'
import {YoutubeVideo} from "./YoutubeVideo";

export const MovieDetails = (props) => {

    const { movieId } = useParams();

    const [movie, setMovie] = useState({});
    const [ trailerId, setTrailerId ] = useState('');

    useEffect(() => {

        movieService.getMovieInfo(movieId)
            .then(movie => setMovie(movie));

        movieService.getMovieInfo(movieId,'/videos')
            .then(videos => {
                setTrailerId(videos.results[0].key);
            })
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
                <p>Description: {movie?.overview}</p>
                <br />
                <p>Trailer:</p>
                <YoutubeVideo embedId={trailerId} />

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