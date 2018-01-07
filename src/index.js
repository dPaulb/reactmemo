import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, Home, Login, Register, NotMatch, Wall} from 'Containers';
import registerServiceWorker from './registerServiceWorker';

// Redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';

// React Router Dom
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/wall/:username" component={Wall}/>
            <Route component={NotMatch}/>
        </Switch>
    </Router>
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();
