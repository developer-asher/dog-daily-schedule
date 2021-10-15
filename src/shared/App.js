import './App.css';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import styled from 'styled-components';

import { history } from '../redux/configureStore';
import { userActions } from '../redux/modules/user';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Detail from '../pages/Detail';
import Write from '../pages/Write';
import PostList from '../pages/PostList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const token = sessionStorage.getItem('auth');
  const userid = localStorage.getItem('userid');

  useEffect(() => {
    if (token) {
      dispatch(userActions.login({ userid: userid }));
    }
  }, []);

  return (
    <Container>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={PostList} />
        <Route path='/write' exact component={Write} />
        <Route path='/detail/:id' exact component={Detail} />
        <Route path='/signin' exact component={SignIn} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/detail' exact component={Detail} />
      </ConnectedRouter>
    </Container>
  );
}

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export default App;
