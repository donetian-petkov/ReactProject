export const Register = ({submitHandler, changeHandler, values, changeAuthMode}) => {
    return (
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
    )
}