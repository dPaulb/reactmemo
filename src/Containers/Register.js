import React, { Component } from 'react';
import {Authentication} from 'Components';
import {connect} from 'react-redux';
import {registerRequest} from 'Actions/authentication';

const $ = window.$;
const Materialize = window.Materialize;
class Register extends Component {


    handleRegister = (id, pw) => {
        return this.props.registerRequest(id, pw).then(
            () => {
                if(this.props.status === "SUCCESS"){
                    Materialize.toast("Success! Please Log in!", 2000);
                    this.props.history.push("/login");
                    return true;
                }
                else{
                    let errorMessage = [
                        'Invalid Username',
                        'Password is too short',
                        'Username already exists'
                    ];

                    let $toastMessage = $('<span style="color : #FFB4BA">' + errorMessage[this.props.errorCode - 1] + '</span>');
                    Materialize.toast($toastMessage, 2000);
                    // console.log(this.props.errorCode);
                    return false;
                }
            }
        )
    }

    render() {
        const {handleRegister} = this;
        return (
            <div>
                <Authentication mode={false}
                    onRegister={handleRegister}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status : state.authentication.register.status,
        errorCode : state.authentication.register.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        registerRequest : (id, pw) => {
            return dispatch(registerRequest(id, pw));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);