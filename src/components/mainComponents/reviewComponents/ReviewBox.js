import {useEffect, useState} from "react";
import * as movieService from '../../../services/movieService'
import {Rating} from "@mui/material";

export const ReviewBox = (props) => {

    const date = new Date(props.reviews?.createdAt).toString();

    const [movie, setMovie] = useState({});

    useEffect(() => {

        movieService.getMovieInfo(props.reviews?.movieId)
            .then(result => {
                setMovie(result);
            })

    })

    return (
        <div className="content">
            <p className="date">{date}</p>
            <h5 style={{"color": "#faaf00"}}>{movie.title}</h5>
            <p>&quot;{props.reviews?.reviewText}</p>
            <Rating name="read-only" value={props.reviews?.rating} readOnly />
        </div>
    )

}
