import {Title} from "../Title";
import {useEffect, useState} from "react";
import * as reviewService from '../../../services/reviewService'
import {ReviewBox} from "./ReviewBox";

export const ReviewSection = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        reviewService.getAllReviews()
            .then(results => {
                for (const object of results) {
                    // Access the Parse Object attributes using the .GET method
                    const reviewId = object.get('objectId');
                    const reviewText = object.get('reviewText');
                    const rating = object.get('rating');
                    const movieId = object.get('movieId');
                    const createdAt = object.get('createdAt');
                    const username = object.get('username');


                    const review = {reviewId, reviewText , rating, movieId, createdAt, username};

                    setReviews(prevState => [...prevState,review]);
                }
            });

    },[]);

    console.log(reviews);
    return (
        <div id="news">
            <Title title="Latest Reviews" criteria='reviews'/>
            {reviews.slice(0,3).map(x => <ReviewBox key={x.reviewId} review={x}/>)}
        </div>
    );
}
