import {Title} from "../Title";
import {useContext, useEffect, useState} from "react";
import {ReviewBox} from "./ReviewBox";
import {ReviewContext} from "../../../contexts/reviewContext";

export const ReviewSection = () => {

    const {reviews} = useContext(ReviewContext);

    return (
        <div id="news">
            <Title title="Latest Reviews" criteria='reviews'/>
            {reviews.slice(0,3).map(x => <ReviewBox key={x.reviewId} review={x}/>)}
        </div>
    );
}
