import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as movieService from "../../services/movieService";
import {Rating} from "@mui/material";

export const Review = (props) => {

    const date = new Date(props.review?.createdAt).toString();

    const [movie, setMovie] = useState({});

    useEffect(() => {

        movieService.getMovieInfo(props.review?.movieId)
            .then(result => {
                setMovie(result);
            })

    },[]);


    return (
        <div className="card" style={{"width": "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">by {props.review?.username}</h6>
                <p className="card-text">{props.review?.reviewText}</p>
                <Rating name="read-only" value={props.review?.rating} readOnly />
                <p></p>
                <Link to={`/movie/${props.review?.movieId}`}>Go to Movie</Link>
            </div>
        </div>
    )

}