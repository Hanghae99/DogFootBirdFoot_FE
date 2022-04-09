import PostDetailPage from "../pages/PostDetailPage";
import Header from "./header/Header";

import { Route } from "react-router-dom"; // 경로설정및 이동을위해 꼭 필요함
import Mypage from "../pages/MyPage";
import Mainpage from "../pages/MainPage";

import { Route } from "react-router-dom";
import Mypage from "../pages/Mypage";
import Mainpage from "../pages/Mainpage";


function App() {
  return (
    <>

      <ConnectedRouter history={history}>
        <Header />
        <Route path="/" exact component={Mainpage} />
        <Route path="/mypage" exact component={Mypage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/postdetail" exact component={PostDetailPage} />
        <Route path="/postwrite" exact component={PostWritePage} />
        <Route path="/signup" exact component={SignupPage} />
      </ConnectedRouter>
    </>
  );
}

export default App;
