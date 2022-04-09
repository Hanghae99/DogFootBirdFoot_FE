import PostDetailPage from "../pages/PostDetailPage";
import Header from "./header/Header";
import { Route } from "react-router-dom";
import Mypage from "../pages/Mypage";
import Mainpage from "../pages/Mainpage";
import Login from "../pages/Login";
import Signuppage from "../pages/SignupPage";

function App() {
  return (
    <>
      <Header />
      <Route path="/" exact component={Mainpage} />
      <Route path="/mypage" exact component={Mypage} />
      <Route path="/login" exact component={Login} />
      <Route path="/postdetail" exact component={PostDetailPage} />
      <Route path="/signup" exact component={Signuppage} />
    </>
  );
}

export default App;
