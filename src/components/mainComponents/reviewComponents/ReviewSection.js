import {Title} from "../Title";
import {useEffect, useState} from "react";
import * as movieService from "../../../services/movieService";
import {ReviewBox} from "./ReviewBox";

export const ReviewSection = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        movieService.getArticles('Movie+Review')
            .then(result => {
                setReviews(result);
            });

    },[]);

    return (
        <div id="news">
            <Title title="Latest Reviews"/>
            {reviews.slice(0,3).map(x => <ReviewBox key={x.url} reviews={x}/>)}
        </div>
    );
}
