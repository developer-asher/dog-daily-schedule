import './App.css';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../redux/configureStore';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Detail from '../pages/Detail';
import Header from '../components/Header';

function App() {
  return (
    <>
      <Header></Header>
      <ConnectedRouter history={history}>
        <Route path='/signin' exact component={SignIn} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/detail' exact component={Detail} />
      </ConnectedRouter>
    </>
  );
}

export default App;
