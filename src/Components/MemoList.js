import React, { Component } from 'react';
import { Memo } from 'Components';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "styles/style.css"
class MemoList extends Component {

    shouldComponentUpdate(nextProps, nextState){
        let current = {
            props: this.props,
            state: this.state
        };
        
        let next = {
            props: nextProps,
            state: nextState
        };

        let update = JSON.stringify(current) !== JSON.stringify(next);
        return update;
    }
    render() {
        const mapToComponents = (data) => {
            return data.map((memo, i) => {
                return (<Memo key={memo._id} 
                                data={memo}
                                 ownsership={memo.writer === this.props.currentUser}
                                 index={i}
                                    onEdit={this.props.onEdit}
                                    onRemove={this.props.onRemove}
                                    onStar={this.props.onStar}/>)
            })
        }
        return (
            <div>
                <ReactCSSTransitionGroup 
                                transitionName="memo" 
                                transitionEnterTimeout={2000}
                                transitionLeaveTimeout={1000}>
                    { mapToComponents(this.props.data) }
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

MemoList.propTypes = {
    data : PropTypes.array,
    currentUser : PropTypes.string,
    onEdit : PropTypes.func,
    onRemove : PropTypes.func,
    onStar : PropTypes.func


};

MemoList.defaultProps = {
    data : [],
    currentUser : '',
    onEdit: (id, index, contents) => { 
        console.error('edit function not defined'); 
        
    },
    onRemove: (id, index) => { 
        console.error('remove function not defined'); 
        
    },
    onRemove: (id, index) => { 
        console.error('star function not defined'); 
        
    }


};

export default MemoList;