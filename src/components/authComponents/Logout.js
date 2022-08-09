import * as authService from '../../services/authService'
import {useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "../../contexts/userContext";

export const Logout = () => {

    const navigate = useNavigate();
    const { user, userLogout } = useContext(UserContext);

    useEffect(() => {
        authService.logout()
            .then(() => {
                userLogout();
                navigate('/');
            })
            .catch(() => {
                navigate('/');
            });
    });

    return null;

}