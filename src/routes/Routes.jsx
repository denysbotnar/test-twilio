import { Switch, Route } from 'react-router-dom';

// Components
import MainPage from '../components/mainPage/MainPage';
import NotFoundPage from '../components/notFoundPage/NotFoundPage';

// Constants
import { routes } from './constants';

const Routes = ({ history }) => (
    <Switch>
        <Route exact history={history} path={routes.home} component={MainPage} />
        <Route component={NotFoundPage} />
    </Switch>
);

export default Routes;