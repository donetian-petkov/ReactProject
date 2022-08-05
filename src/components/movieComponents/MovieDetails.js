import { useParams } from 'react-router';
import {useEffect, useState} from "react";
import * as movieService from '../../services/movieService'
import {YoutubeVideo} from "./YoutubeVideo";

export const MovieDetails = (props) => {

    const { movieId } = useParams();

    const [movie, setMovie] = useState({});
    const [trailerId, setTrailerId] = useState('');

    useEffect(() => {

        movieService.getMovieInfo(movieId)
            .then(movie => setMovie(movie));

        movieService.getMovieInfo(movieId,'/videos')
            .then(videos => {
                setTrailerId(videos.results[videos.results.length-1].key);
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
                <h3>Description: </h3> <p>{movie?.overview}</p>
                <br />
                <h3>Release Date:</h3> <p>{movie?.release_date}</p>
                <br />
                <h3>Trailer:</h3>
                <YoutubeVideo embedId={trailerId} />

            </div>
        </div>
    )

}