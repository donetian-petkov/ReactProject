import { useParams } from 'react-router';
import {useEffect, useState} from "react";
import * as movieService from '../../services/movieService';
import './MovieDetails.css';
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
       /* <div className='movie'>
            <div className="movie-image">
                <img src={`${imageUrl}/${movie?.poster_path}`} alt=""/>
            </div>
            <div className='content'>
                <h2>{movie?.original_title}</h2>

                <h4>Description: </h4> <p>{movie?.overview}</p>

                <h4>Release Date:</h4> <p>{movie?.release_date}</p>
                <br />
                <h4>Trailer:</h4>
                <YoutubeVideo embedId={trailerId} />

            </div>
        </div>*/
        <div className="card text-black bg-white mb-3" style={{"width": "18rem"}}>
            <img className="card-img-top" src={`${imageUrl}/${movie?.poster_path}`} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{movie?.title}</h5>
                    <p></p>
                    <h6 className="card-title">Release Date: {movie?.release_date}</h6>
                    <a href={`https://www.imdb.com/title/${movie?.imdb_id}`} className="card-link">IMDb Link</a>
                    <p></p>
                    <p className="card-text">Description: {movie?.overview}</p>
                </div>

                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
        </div>

    )

}