import {useContext, useState} from "react";
import './AuthComponent.css';
import {useNavigate} from "react-router-dom";
import * as authService from "../../services/authService";
import {UserContext} from "../../contexts/userContext";

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

            const {
                username,
                password,
            } = Object.fromEntries(new FormData(e.target));


            authService.login(username, password)
                .then(authData => {
                    userLogin(authData);
                    navigate('/');
                })
                .catch(() => {
                    navigate('/404');
                });


        } else if (authMode === 'signup') {

            const {
                username,
                email,
                password,
            } = Object.fromEntries(new FormData(e.target));

            authService.register(username, email, password)
                .then(authData => {
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
                <form className="Auth-form" onSubmit={submitHandler}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Login</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter username"
                                name='username'
                                value={values.username}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                name='password'
                                value={values.password}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={submitHandler}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Register</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Jane Doe"
                            name='username'
                            value={values.username}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                            name='email'
                            value={values.email}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            name='password'
                            value={values.password}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )

}