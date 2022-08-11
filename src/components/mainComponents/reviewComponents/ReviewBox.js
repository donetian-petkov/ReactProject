import {useEffect, useState} from "react";
import * as movieService from '../../../services/movieService'
import {Rating} from "@mui/material";
import {Link} from "react-router-dom";

export const ReviewBox = (props) => {

    const date = new Date(props.review?.createdAt).toString();
    const [movie, setMovie] = useState({});


    useEffect(() => {

        movieService.getMovieInfo(props.review?.movieId)
            .then(result => {
                setMovie(result);
            })

    },[]);

    return (
        <div className="content">
            <p className="date">{date}</p>
            <h5 style={{"color": "#faaf00"}}>{movie.title}</h5>
            <p>by {props.review?.username}</p>
            <p>&quot;{props.review?.reviewText}&quot;</p>
            <Rating name="read-only" value={props.review?.rating} readOnly />
            <p></p>
            <Link to={`/movie/${props.review?.movieId}`}>Go to Movie</Link>
        </div>
    )

}
