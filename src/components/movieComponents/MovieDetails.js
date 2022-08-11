import {useParams} from 'react-router';
import {useEffect, useState} from "react";
import * as movieService from '../../services/movieService';
import './MovieDetails.css';
import {YoutubeVideo} from "./YoutubeVideo";
import {Rating, styled, Typography} from "@mui/material";



export const MovieDetails = (props) => {

    const imageUrl = `https://image.tmdb.org/t/p/w500`;
    const {movieId} = useParams();
    const [movie, setMovie] = useState({});
    const [trailerId, setTrailerId] = useState('');
    const [value, setValue] = useState(2);


    useEffect(() => {

        movieService.getMovieInfo(movieId)
            .then(movie => setMovie(movie));

        movieService.getMovieInfo(movieId, '/videos')
            .then(videos => {
                setTrailerId(videos.results[videos.results.length - 1].key);
            })
    }, []);


    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#faaf00',
        },
        '& .MuiRating-iconHover': {
            color: '#ffe500',
        },
    });

    return (

            <div className="card  text-white bg-dark  mb-3">
                <img className="card-img-top" src={`${imageUrl}/${movie?.poster_path}`} alt="Card image cap"
                     style={{"height": "500px", "objectFit": "none", "objectPosition":"50% 80%"}}/>
                <div className="card-body">
                    <h5 className="card-title" style={{"color" : "#faaf00"}}>{movie?.title}</h5>
                    <StyledRating
                        value={movie?.vote_average}
                        max={10}
                    />
                    <p></p>
                    <p className="card-text"><small className="text-muted">Release Date: {movie?.release_date}</small>
                    </p>
                    <p className="card-text">{movie?.overview}</p>
                    <a href={`https://www.imdb.com/title/${movie?.imdb_id}`} className="card-link">IMDb Link</a>
                </div>

                <YoutubeVideo embedId={trailerId} />
            </div>

    )



}