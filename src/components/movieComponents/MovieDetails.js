import {useParams} from 'react-router';
import {useEffect, useState} from "react";
import * as movieService from '../../services/movieService';
import './MovieDetails.css';
import {YoutubeVideo} from "./YoutubeVideo";
import {Rating, Typography} from "@mui/material";
import {number} from "prop-types";
import BasicRating from "./BasicRating";


export const MovieDetails = (props) => {

    const {movieId} = useParams();
    const [movie, setMovie] = useState({});
    const [trailerId, setTrailerId] = useState('');

    useEffect(() => {

        movieService.getMovieInfo(movieId)
            .then(movie => setMovie(movie));

        movieService.getMovieInfo(movieId, '/videos')
            .then(videos => {
                setTrailerId(videos.results[videos.results.length - 1].key);
            })
    }, []);

    const imageUrl = `https://image.tmdb.org/t/p/w500`;

    return (

            <div className="card  text-white bg-dark  mb-3">
                <img className="card-img-top" src={`${imageUrl}/${movie?.poster_path}`} alt="Card image cap"
                     style={{"height": "500px", "objectFit": "none"}}/>
                <div className="card-body">
                    <h5 className="card-title">{movie?.title}</h5>
                    <p className="card-text"><small className="text-muted">Release Date: {movie?.release_date}</small>
                    </p>
                    <p className="card-text">{movie?.overview}</p>
                    <a href={`https://www.imdb.com/title/${movie?.imdb_id}`} className="card-link">IMDb Link</a>
                </div>
            </div>

    )

}