import React from "react";
import PostDetailPage from "../pages/PostDetailPage";
import Header from "./header/Header";

import { Route } from "react-router-dom"; // 경로설정및 이동을위해 꼭 필요함
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/store";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";

import MyPage from "../pages/Mypage";
import MainPage from "../pages/Mainpage";
import LoginPage from "../pages/LoginPage";
import PostWritePage from "../pages/PostWritePage";
import SignUpPage from "../pages/SignUpPage";
import { Grid } from "../elements/index";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token") ? true : false;

  React.useEffect(() => {
    if (token) {
      dispatch(userActions.isLogin());
    }
  }, []);

  return (
    <>
      <Grid>
        <ConnectedRouter history={history}>
          <Header />
          <Route path="/" exact component={MainPage} />
          <Route path="/mypage" exact component={MyPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/post/detail/:postId" exact component={PostDetailPage} />
          <Route path="/post/write" exact component={PostWritePage} />
          <Route path="/signup" exact component={SignUpPage} />
        </ConnectedRouter>
      </Grid>
    </>
  );
}

export default App;
