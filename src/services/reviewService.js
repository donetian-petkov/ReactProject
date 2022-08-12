import Parse from "parse";

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
    'p8ysMPIoBOGNP9RqNx6BwBE3XwLCsmHxyizcCpEd', // This is your Application ID
    'aeS05iGcsheSRUYg4hMwTnWqI3DxpIZIlwuiKsN9' // This is your Javascript key
);

export const addReview = async (data) => {

    const {reviewText, rating, movieId, userId} = data;

    const myNewObject = new Parse.Object('Review');
    myNewObject.set('reviewText', reviewText);
    myNewObject.set('rating', Number(rating));
    myNewObject.set('movieId', movieId);
    myNewObject.set('userId', userId);
    try {
        const result = await myNewObject.save();
        // Access the Parse Object attributes using the .GET method
    } catch (error) {
        console.error('Error while creating Review: ', error);
    }
}

export const getAllReviews = async () => {

    const Review = Parse.Object.extend('Review');
    const query = new Parse.Query(Review);
    // You can also query by using a parameter of an object
    // query.equalTo('objectId', 'xKue915KBG');
    try {
        const results = await query.find();

        return results;
    } catch (error) {
        console.error('Error while fetching Review', error);
    }

}

export const getReviewsByUserId = async (userId) => {

    const Review = Parse.Object.extend('Review');

    const query = new Parse.Query(Review);



}
