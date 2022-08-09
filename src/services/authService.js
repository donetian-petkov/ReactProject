import * as request from "./requester";
import Parse from "parse";

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
    'p8ysMPIoBOGNP9RqNx6BwBE3XwLCsmHxyizcCpEd', // This is your Application ID
    'aeS05iGcsheSRUYg4hMwTnWqI3DxpIZIlwuiKsN9' // This is your Javascript key
);

export const login = async (username, password) => {

    try {
        // Pass the username and password to logIn function
       return await Parse.User.logIn(username, password);
    } catch (error) {
        console.error('Error while logging in user', error);
    }
    
}

/*export const logout = async (accessToken) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};*/

export const register = async (username, email, password) => {

    const user = new Parse.User();
    user.set('username', username);
    user.set('email', email);
    user.set('password', password);

    try {
        let userResult = await user.signUp();
        console.log('User signed up', userResult);
    } catch (error) {
        console.error('Error while signing up user', error);
    }

};
