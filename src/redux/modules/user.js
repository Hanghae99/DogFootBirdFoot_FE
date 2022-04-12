// 1. import
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";
import axios from "axios";

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
const idcheckAPI = (id, pw) => {
  return function (dispatch, getState, { history }) {
    console.log("아이디", id);
    console.log("비밀번호", pw);

    api
      .post("/user/dupliChk", {
        username: id,
        password: pw,
      })
      .then((res) => {
        console.log(res);
        if (res.result === true) {
          window.alert("작성한 id로 가입할 수 있습니다!");
        } else {
          window.alert("작성한 id를 사용하는 회원이 이미 있습니다!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

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
        console.log(res);
        window.alert("회원가입이 완료되었습니다. 로그인해주세요!");
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 로그인
// 로그인 로직의 전반적인 프로세스는 아래의 블로그를 참고했다.

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
        // 로컬스토리지에 accesstoken 저장
        localStorage.setItem("accesstoken", res.data.token);

        // 이 부분은 자바스크립트에서 jwt를 디코딩하여 userInfo 를 저장하는 부분
        // 1. 토큰을 .을 기준으로 split 하고 1번째 값을 불러온다.
        // jwt에서 0번째는 header, 1번째는 payload, 2번째는 verify signature 이다.
        // 즉, payload 에 유저 정보가 담겨있으므로 가져오는 것.
        const base64Payload = res.data.token.split(".")[1];

        // base64는 바이너리 데이터를 6비트 단위로 끊어, 인/디코드 하는 인코딩 기법
        // 64 = 2의 6제곱 = 6비트
        // base64payload 를 디코드 하여 buffer 형태의 payload 만듦
        const payload = Buffer.from(base64Payload, "base64");
        console.log(payload);

        // JSON.parse() 메서드는 JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성
        const result = JSON.parse(payload.toString());
        console.log(result);

        //로컬스토리지에 userId 저장
        localStorage.setItem("userInfo", result.userId);

        // result.userID 를 setUser 액션 시 user 에 넣어주는데.. 어떤 값인지 확인해야 한다.
        dispatch(
          setUser({
            user: result.userId,
          })
        );
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

    // 토큰이 없거나 유저인포가 없거나 둘 중 하나면 로그인이 아님
    if (!token || !userInfo) {
      return false;
    }
    console.log(token);
    console.log(userInfo);
    // 로컬스토리지에 userInfo 가 있으면 setUser 에 값 넣어서 디스패치
    dispatch(
      setUser({
        user: userInfo,
      })
    );
  };
};

// 로그아웃
const logout = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    dispatch(logOut());
    history.replace("/");
  };
};

// 5. reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  idcheckAPI,
  signupAPI,
  loginAPI,
  setUser,
  isLogin,
  logOut,
};

export { actionCreators };
