import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
export default class SingUp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row text-center">
                <form className="col-sm-4 offset-sm-4 form-signin">
                    <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
                    <label for="inputPassword" class="sr-only">Repeat Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
                    <br />
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p class="mt-5 mb-3 text-muted">Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link></p>
                </form>
            </div>
        );
    }
}