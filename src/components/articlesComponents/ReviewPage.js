import {useEffect, useState} from "react";
import * as reviewService from "../../services/reviewService";
import {Article} from "./Article";
import './ReviewPage.css';

export const ReviewPage = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {

        reviewService.getAllReviews()
            .then(results => {
                for (const object of results) {
                    // Access the Parse Object attributes using the .GET method
                    const reviewText = object.get('reviewText');
                    const rating = object.get('rating');
                    const movieId = object.get('movieId');
                    const createdAt = object.get('createdAt');

                    const review = {reviewText , rating, movieId, createdAt};

                    setArticles(prevState => ({
                        ...prevState,
                        review
                    }));
                }
            });


    },[]);

    console.log(articles);

    return (
        <h2>Reviews</h2>
    )


}