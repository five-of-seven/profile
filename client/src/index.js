// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import promise from 'redux-promise';
// import { createStore, applyMiddleware, compose } from 'redux';
// import { HashRouter, Route, Switch } from 'react-router-dom';
// // import ReduxPromise from 'redux-promise';
// import { MuiThemeProvider } from '@material-ui/core/styles';
// import reducers from './reducers';
// import Profile from './containers/Profile';
// import EditProfile from './containers/EditProfile';
// import myTheme from './ui/theme/index';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(promise)));
// ReactDOM.render(
//   <Provider store={store}>
//    <HashRouter>
//     <MuiThemeProvider theme={myTheme}>
//       <Switch>
//         <Route exact path="/" component={profile} />
//         <Route path="/profile" component={editprofile} />
//       </Switch>
//     </MuiThemeProvider>
//     </HashRouter>
//   </Provider>,
//   document.getElementById('root'),
// );


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import myTheme from './ui/theme/index';
import Profile from './containers/Profile';
import EditProfile from './containers/EditProfile';

const createSoreWithMiddleware = applyMiddleware(ReduxPromise) (createStore);

ReactDOM.render(
  <Provider store={ createSoreWithMiddleware(reducers) } >
   <HashRouter>
     <MuiThemeProvider theme={myTheme}>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route path="/editprofile" component={EditProfile} />
      </Switch>
      </MuiThemeProvider>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
