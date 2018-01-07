import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
class Authentication extends Component {


    state = {
        username : '',
        password : ''
    };

    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleLogin = () => {
        const {username, password} = this.state;
        const {onLogin} = this.props;

        let id = username;
        let pw = password;

        onLogin(id, pw).then(
            (success) => {
                if(!success){
                    this.setState({
                        password : ''
                    });
                }
            }
        );
    }

    handleRegister = () => {
        const {username, password} = this.state;
        const {onRegister} = this.props;

        onRegister(username, password).then(
            (success) => {
                if(!success){
                    this.setState({
                        username : '',
                        password : ''
                    });
                }
            }
        )
    }

    handleKeyPress = (e) => {
        if(e.key === "Enter"){
            if(this.props.mode){
                this.handleLogin();
            }
            else{
                this.handleRegister();
            }
        }
    }

    render() {
        const {username, password} = this.state;
        const {handleChange, handleLogin, handleRegister, handleKeyPress} = this;

        const InputBoxes = (
            <div className="row">
                        <div className="input-field col s12">
                            <input 
                                type="text" 
                                name="username"
                                value={username}
                                onChange={handleChange}/>
                            <label>ID</label>
                        </div>
                        <div className="input-field col s12">
                            <input 
                                id="password" 
                                type="password" 
                                className="validate"
                                name="password"
                                value={password}
                                onChange={handleChange}
                                onKeyPress={handleKeyPress}/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
        );
        const LoginView = (
            <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">LOGIN</span>
                    <div className="row">
                {/* <form className="col s12" action="" method="post" onSubmit={handleLogin}> */}
                    {InputBoxes}
                    <button onClick={handleLogin} className="btn waves-effect waves-light" type="submit" name="action">LogIn
                    </button>
                    <p>New Here? Then Let's go to <Link to="/register">register!</Link></p>
                {/* </form> */}
                    </div>
                    </div>
                </div>
        );

        const RegisterView =  (
            <div className="card blue-grey darken-1">
            <div className="card-content white-text">
            <span className="card-title">REGISTER</span>
            <div className="row">
        {/* <form className="col s12"> */}
        {InputBoxes}
            <button onClick={handleRegister} className="btn waves-effect waves-light" type="submit" name="action">Register
            </button>
            
        {/* </form> */}
            </div>
            </div>
        </div>
        );

        const {mode} = this.props;
        return (
            <div className="row">

                <div className="col s6 offset-s3">
                    {mode ?  LoginView : RegisterView}
                </div>

            </div>
        );
    }
}

Authentication.propTypes = {
    mode : PropTypes.bool,
    onLogin : PropTypes.func,
    onRegister : PropTypes.func
};
Authentication.defaultProps = {
    mode : true,
    onLogin : (id, pw) => {
        console.log("onLogin has not defined.");
    },
    onRegister : (id, pw) => {
        console.log("onRegister has not defined.");
    }
};


export default Authentication;