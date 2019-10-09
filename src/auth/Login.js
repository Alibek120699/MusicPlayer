import React from "react";
import { Link } from "react-router-dom";

export function Login(props){
    return (
        <div className="container-fluid h-100 bg-light">
            <div className="row form-group">
                <div className="col bg-dark text-white">
                    <h1 className="navbar-brand">Music Oriented Platform</h1>
                </div>
            </div>
            <div className="row justify-content-center align-items-center h-100">
                <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <h3 className="text-center text-secondary">Login Page</h3>
                    <form>
                        <div className="form-group">
                            <input className="form-control form-control-lg"
                                placeholder="Username"
                                type="text"
                            />
                        </div>
                        <div className="form-group">
                            <input className="form-control form-control-lg"
                                placeholder="Password"
                                type="password"
                            />
                        </div>
                        <div className="form-group">
                            <Link className="btn btn-info btn-lg btn-block"
                                to="/mop/songs">
                                    Login
                            </Link>
                        </div>
                        <div className="row">
                            <hr width="45%" />
                            <h5 className="text-secondary">OR</h5>
                            <hr width="45%" />
                        </div>
                        <div className="form-group">
                            <Link className="btn btn-info btn-lg btn-block"
                                to="/mop/signup">
                                    Register
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}