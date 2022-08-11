import {useContext, useEffect, useState} from "react";
import * as movieService from '../../services/movieService';
import * as reviewService from '../../services/reviewService';
import {useNavigate, useParams} from "react-router-dom";
import {UserContext} from "../../contexts/userContext";

export const AddReview = (props) => {

    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const {user} = useContext(UserContext);
    const [movie, setMovie] = useState({});
    const {movieId} = useParams();
    const navigate = useNavigate();


    useEffect(() => {

        movieService.getMovieInfo(movieId)
            .then(result => setMovie(result));

    }, []);

    const reviewHandler = (e) => {

        e.preventDefault();

        console.log(user);

        const username = user.username;

        reviewService.addReview({reviewText, rating, movieId, username})
            .then(result => {
                navigate(`/movie/${movieId}`);
            })
            .catch(() => {
                navigate('/404');
            });

    }

    return (
        <form onSubmit={reviewHandler}>
            <div className="form-group" style={{alignItems: 'center'}}>
                <h2>Review for {movie?.title}</h2>
                <h5>Rating:</h5>
                <select className="form-control"
                        name='rating'
                        id="exampleFormControlSelect1"
                        style={{width: '10%'}}
                        value={rating}
                        onChange={(e) => {
                            setRating(e.target.value);
                        }}
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>
            <div className="form-group">
                <h5>Review:</h5>
                <textarea className="form-control"
                          name='reviewText'
                          id="exampleFormControlTextarea1"
                          rows="3"
                          value={reviewText}
                          onChange={(e) => {
                              setReviewText(e.target.value);
                          }}
                >
                </textarea>
            </div>
            <button className="card-link">Submit Review</button>
        </form>
    )

}