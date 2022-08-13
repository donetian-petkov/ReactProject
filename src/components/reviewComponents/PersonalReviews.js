import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as reviewService from '../../services/reviewService';
import {Review} from "./Review";

export const PersonalReviews = () => {

    const { userId } = useParams();
    const [reviews, setReviews] = useState([])

    useEffect(() => {

        reviewService.getReviewsByUserId(userId)
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

                    setReviews(prevState => ([
                        ...prevState,
                        review
                    ]));
                }
            })

    },[]);


return (

    <div id="news" >
        <div className="articleSection">
            {reviews?.slice(0,21).map(x => <Review key={x.reviewId} review={x}/>)}
        </div>
    </div>

)

}
