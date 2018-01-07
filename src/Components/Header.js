import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Search} from 'Components';
class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            search : false
        };
        this.toggleSearch = this.toggleSearch.bind(this);
    }

    toggleSearch(){
        this.setState({
            search : !this.state.search
        });
    }

    render() {

        const LoginButton = () => (
                    <li>
                        <Link to="/login">
                            <i className="material-icons">vpn_key</i>
                        </Link>
                    </li>
        );

        const LogoutButton = () => (
                    <li onClick={this.props.onLogout}>
                        <a><i className="material-icons">lock_open</i></a>
                    </li>
        );


        const {isLoggedIn} = this.props;

        return (
            <div>
                {
                    this.state.search ? <Search onClose={this.toggleSearch}
                                                onSearch={this.props.onSearch}
                                                usernames={this.props.usernames}/> : ""
                }
            <nav>
                <div className="nav-wrapper">
                <Link to="/" className="brand-logo center">Memo</Link>
                <ul>
                    <li><a onClick={this.toggleSearch}><i className="material-icons">search</i></a></li>
                </ul>
                <div className="right">
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    {
                        isLoggedIn ? <LogoutButton/> : <LoginButton/>
                    }
                </ul>
                </div>
                </div>
            </nav>
            </div>
        );
    }
}



Header.propTypes = {
    isLoggedIn : PropTypes.bool,
    onLogout : PropTypes.func,
    onSearch : PropTypes.func,
    usernames : PropTypes.array
};

Header.defaultProps = {
    isLoggedIn : false,
    onLogout : () => {
        console.log("onLogout has not been defined.");
    },
    onSearch : () => {
        console.log("onSearch has not been defined.");
    }
};

export default Header;