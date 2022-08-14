import Parse from "parse";

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
    'p8ysMPIoBOGNP9RqNx6BwBE3XwLCsmHxyizcCpEd', // This is your Application ID
    'aeS05iGcsheSRUYg4hMwTnWqI3DxpIZIlwuiKsN9' // This is your Javascript key
);

export const register = async (username, email, password) => {

    const user = new Parse.User();
    user.set('username', username);
    user.set('email', email);
    user.set('password', password);

    try {
        let userResult = await user.signUp();

        return userResult;
    } catch (error) {
        throw new Error('Could not Register');
    }

};

export const login = async (username, password) => {

    try {
        // Pass the username and password to logIn function
       return await Parse.User.logIn(username, password);
    } catch (error) {
        throw new Error('Could not Login');
    }

}

export const logout = async () => {
    try {
        await Parse.User.logOut();
        // To verify that current user is now empty, currentAsync can be used
        const currentUser = await Parse.User.current();
        // Update state variable holding current user

        return true;
    } catch (error) {
        return false;
    }
};



