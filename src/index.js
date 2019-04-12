import './main.css';

import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import routes from 'core/routes.config';
import React, { Fragment } from 'react';

import { history, store } from './core/store.config';

const App = () => (
    <ConnectedRouter history={ history }>
        <Fragment>
            {
                routes.map(({ component, path }) =>
                    <Route
                        exact
                        component={ component }
                        key={ path }
                        path={ path }
                    />
                )
            }
        </Fragment>
    </ConnectedRouter>
);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
