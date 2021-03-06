import React from "react";
import PostDetailPage from "../pages/PostDetailPage";
import Header from "./header/Header";

import { Route } from "react-router-dom"; // 경로설정및 이동을위해 꼭 필요함
import { ConnectedRouter } from "connected-react-router";
import MyPage from "../pages/MyPage";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import PostWritePage from "../pages/PostWritePage";
import SignUpPage from "../pages/SignUpPage";
import { history } from "../redux/store";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

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
      <ConnectedRouter history={history}>
        <Header />
        <Route path="/" exact component={MainPage} />
        <Route path="/mypage" exact component={MyPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/postdetail" exact component={PostDetailPage} />
        <Route path="/postdetail:id" exact component={PostDetailPage} />
        <Route path="/postwrite" exact component={PostWritePage} />
        <Route path="/signup" exact component={SignUpPage} />
      </ConnectedRouter>
    </>
  );
}

export default App;
