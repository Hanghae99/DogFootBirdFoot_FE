// 1. import
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// 2. actions(액션 타입)
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// 3. action creators (액션 생성 함수)
const setUser = createAction(SET_USER, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

// 4. initialState 초기값 설정
const initialState = {
  user: null,
  is_login: false,
};

// 미들웨어 1. 회원가입

const signupAPI = (id, nickname, pw, email) => {
  return function (dispatch, getState, { history }) {
    console.log("아이디", id);
    console.log("닉네임", nickname);
    console.log("비밀번호", pw);
    console.log("이메일", email);

    api
      .post("/user/signup", {
        username: id,
        nickname: nickname,
        password: pw,
        email: email,
      })
      .then((res) => {
        window.alert("회원가입이 완료되었습니다. 로그인해주세요!");
        history.push("/login");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

// 로그인
const loginAPI = (id, pw) => {
  return function (dispatch, getState, { history }) {
    console.log(id, pw);
    api
      .post("/users/login", {
        username: id,
        password: pw,
      })
      .then((res) => {
        console.log(res);
        // localStorage.setItem("token", res.data.token);
        // const base64Payload = res.data.token.split(".")[1];
        // const payload = Buffer.from(base64Payload, "base64");
        // const result = JSON.parse(payload.toString());
        // localStorage.setItem("userInfo", result.userId);
        // dispatch(
        //   setUser({
        //     user: result.userId, //어떤 key값으로 들어오는지 확인해야 함
        //   })
        // );
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// isLogin
const isLogin = () => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem("token");
    const userInfo = localStorage.getItem("userInfo");

    if (!token || !userInfo) {
      return false;
    }
    dispatch(
      setUser({
        name: userInfo,
      })
    );
  };
};

// 로그아웃
const logout = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem("token");
    // localStorage.removeItem("userInfo");
    dispatch(logOut());
    history.replace("/");
  };
};

// 5. reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        //뭘 해줘야하나
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        // 뭘 해줘야하나
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  signupAPI,
  loginAPI,
  setUser,
  isLogin,
  logOut,
};

export { actionCreators };
