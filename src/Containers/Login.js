import React, { Component } from 'react';
import {Authentication} from 'Components';
import {loginRequest} from 'Actions/authentication';
import {connect} from 'react-redux';

const $ = window.$;
const Materialize = window.Materialize;
class Login extends Component {

    handleLogin = (id, pw) => {
        return this.props.loginRequest(id, pw).then(
            () => {
                if(this.props.status === "SUCCESS"){
                    let loginData = {
                        isLoggedIn : true,
                        username : id
                    };

                    document.cookie = 'key=' + btoa(JSON.stringify(loginData));
                    Materialize.toast('Welcome, ' + id + '!', 4000);
                    this.props.history.push("/");
                    return true;
                }
                else{
                    let $toastContent = $('<span style="color: #FFB4BA">Incorrect username or password</span>');
                    Materialize.toast($toastContent, 2000);
                    return false;
                }

            }
        )
    }

    render() {
        const {handleLogin} = this;
        return (
            <div>
                <Authentication mode={true}
                    onLogin={handleLogin}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status : state.authentication.login.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest : (id, pw) => {
            return dispatch(loginRequest(id, pw));
        }
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(Login);