import {useContext} from "react";
import './ReviewPage.css';
import {Review} from "./Review";
import {ReviewContext} from "../../contexts/reviewContext";

export const ReviewPage = () => {

    const {reviews} = useContext(ReviewContext);

    return (
        <div id="news" >
            <div className="articleSection">
                {reviews.slice(0,21).map(x => <Review key={x.reviewId} review={x}/>)}
            </div>
        </div>
    )


}