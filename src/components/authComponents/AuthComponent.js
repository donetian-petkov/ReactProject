import {useContext, useState} from "react";
import './AuthComponent.css';
import {useNavigate} from "react-router-dom";
import * as authService from "../../services/authService";
import {UserContext} from "../../contexts/userContext";
import {Login} from "./Login";
import {Register} from "./Register";

export const AuthComponent = (props) => {

    const [authMode, setAuthMode] = useState("signin");
    const { userLogin } = useContext(UserContext);
    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
    });

    const submitHandler = (e) => {

        e.preventDefault();

        if (authMode === 'signin') {

            authService.login(values.username, values.password)
                .then(authData => {
                    console.log(authData)
                    userLogin(authData);
                    navigate('/');
                })
                .catch(() => {
                    navigate('/404');
                });


        } else if (authMode === 'signup') {

            authService.register(values.username, values.email, values.password)
                .then(authData => {
                    console.log(authData);
                    userLogin(authData);
                    navigate('/');
                })
                .catch(() => {
                    navigate('/404');
                });
        }

    };

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };



    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin");
    };

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <Login changeHandler={changeHandler} submitHandler={submitHandler} changeAuthMode={changeAuthMode} values={values} />
            </div>
        )
    }

    return (
        <div className="Auth-form-container">
            <Register changeHandler={changeHandler} submitHandler={submitHandler} changeAuthMode={changeAuthMode} values={values} />
        </div>
    )

}
