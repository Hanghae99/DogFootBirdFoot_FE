import PostDetailPage from "../pages/PostDetailPage";
import Header from "./header/Header";
import { Route } from "react-router-dom"; // 경로설정및 이동을위해 꼭 필요함
import Mypage from "../pages/MyPage";
import Mainpage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import Signuppage from "../pages/SignupPage";
import PostWritePage from "../pages/PostWritePage";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/store";

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
        <Route path="/signup" exact component={Signuppage} />
      </ConnectedRouter>
    </>
  );
}

export default App;
