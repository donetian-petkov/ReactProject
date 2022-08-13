import {useParams} from 'react-router';
import {useContext, useEffect, useState} from "react";
import * as movieService from '../../services/movieService';
import './MovieDetails.css';
import {YoutubeVideo} from "./YoutubeVideo";
import {Rating, styled} from "@mui/material";
import {Link} from "react-router-dom";
import {Review} from "../reviewComponents/Review";
import {ReviewContext} from "../../contexts/reviewContext";
import {UserContext} from "../../contexts/userContext";


export const MovieDetails = (props) => {

    const imageUrl = `https://image.tmdb.org/t/p/w500`;
    const {movieId} = useParams();
    const [movie, setMovie] = useState({});
    const [trailerId, setTrailerId] = useState('');
    const {reviews} = useContext(ReviewContext);
    const {getIsLoggedIn} = useContext(UserContext);

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
                 style={{"height": "500px", "objectFit": "none", "objectPosition": "50% 80%"}}/>
            <div className="card-body">
                <h5 className="card-title" style={{"color": "#faaf00"}}>{movie?.title}</h5>
                <StyledRating
                    value={movie?.vote_average}
                    max={10}
                    readOnly
                    size='small'
                />
                <p></p>
                <p className="card-text"><small className="text-muted">Release Date: {movie?.release_date}</small>
                </p>
                <p><h7 className="card-text">{movie?.overview}</h7></p>
                <a href={`https://www.imdb.com/title/${movie?.imdb_id}`} target="_blank" className="card-link">
                    <button type="button" className="btn btn-warning btn-sm">IMDb Link</button>
                </a>
                {
                    getIsLoggedIn()
                        ? <Link to={`/addReview/${movie?.id}`} className="card-link">
                            <button type="button" className="btn btn-warning btn-sm">Add Review and Rating</button>
                        </Link>
                        : null
                }

            </div>

            <YoutubeVideo embedId={trailerId}/>
            <p></p>

            <div className="articleSection">
                {reviews.filter(x => x.movieId === movie?.id?.toString()).map(x => <Review key={x.reviewId}
                                                                                           review={x}/>)}
            </div>

        </div>

    )


}