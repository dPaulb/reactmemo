import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Write extends Component {

    state = {
        contents : ''
    }

    handleChange = (e) => {
        this.setState({
            contents : e.target.value
        })
    }


    handlePost = () => {
        this.props.onPost(this.state.contents).then(
            () => {
                this.setState({
                    contents : ''
                })
            }
        )

    }
    render() {
        const {handleChange, handlePost} = this;
        const {contents} = this.state;
        return (
            <div className="container write">
                <div className="card">
                    <div className="card-content">
                        <textarea 
                            className="materialize-textarea" 
                            placeholder="Write down your memo"
                            value={contents}
                            onChange={handleChange}></textarea>
                    </div>
                    <div className="card-action">
                        <a onClick={handlePost}>POST</a>
                    </div>
                </div>
            </div>
        );
    }
}

Write.propTypes = {
    onPost : PropTypes.func
};

Write.defaultProps = {
    onPost : (contents) => {
        console.error("onPost method has not defined");
    }
};

export default Write;