import PostDetailPage from "../pages/PostDetailPage";
import Header from "./header/Header";
import { Route } from "react-router-dom";
import Mypage from "../pages/Mypage";
import Mainpage from "../pages/Mainpage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import PostWritePage from "../pages/PostWritePage";

function App() {
  return (
    <>
      <Header />
      <Route path="/" exact component={Mainpage} />
      <Route path="/mypage" exact component={Mypage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/postdetail" exact component={PostDetailPage} />
      <Route path="/postwrite" exact component={PostWritePage} />
      <Route path="/signup" exact component={SignupPage} />
    </>
  );
}

export default App;
