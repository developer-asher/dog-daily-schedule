import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";

import Login from "./pages/Login";
import PostList from "./pages/PostList";
import Detail from "./pages/PostList";
import Write from "./pages/Write";
// 위에서 만든 axios를 모듈화한 apis를 불러와줍니다.

const App = (props) => {

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={PostList} />
        <Route path="/Login" exact component={Login}/>
        <Route path="/detail" exact component={Detail} />
        <Route path="/write" exact component={Write} />
      </ConnectedRouter>
    </React.Fragment>
  );
};

export default App;
