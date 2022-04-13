// 1. import
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";

// 2. actions(액션 타입)
// const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const SET_PROFILE = "SET_PROFILE";
const SET_PREVIEW = "SET_PREVIEW";
const LOG_OUT = "LOG_OUT";

// 3. action creators (액션 생성 함수)
const setUser = createAction(SET_USER, (user) => ({ user }));
// const getUser = createAction(GET_USER, (user) => ({ user }));
const setProfile = createAction(SET_PROFILE, (image) => ({ image }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

// 4. initialState 초기값 설정
const initialState = {
  userId: null, // 서버에서 받아올 값
  username: null, // id
  email: null,
  nickname: null,
  userProfile: null,
  preview: null,
  is_login: false,
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

const loginAPI = (id, pw) => {
  return function (dispatch, getState, { history }) {
    console.log(id, pw);
    api
      .post("/user/login", {
        username: id,
        password: pw,
      })
      .then((data) => {
        console.log(data);
        // 로컬스토리지에 accesstoken 저장
        localStorage.setItem("token", data.headers.authorization);
        localStorage.setItem("userInfo", data.data);
        localStorage.setItem("userId", data.data.userId);
        localStorage.setItem("username", data.data.emaiusernamel);
        localStorage.setItem("email", data.data.email);
        localStorage.setItem("nickname", data.data.nickname);
        localStorage.setItem("userProfile", data.data.userProfile);

        dispatch(
          setUser({
            userId: data.data.userId,
            username: data.data.username,
            email: data.data.email,
            nickname: data.data.nickname,
            userProfile: data.data.userProfile,
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

    // 토큰이 없거나 유저아이디가 없거나 둘 중 하나면 로그인이 아님
    if (!token || !userInfo) {
      dispatch(logout());
    }
    console.log(token);
    console.log(userInfo);
    dispatch(
      // 어딘가에서 setUser 를 위한 정보를 가지고 와야 함. 토큰에 이 정보 있는지 확인 필요
      setUser({
        userId: userInfo.userId,
        username: userInfo.username,
        email: userInfo.email,
        nickname: userInfo.nickname,
        userProfile: userInfo.userProfile,
      })
    );
  };
};

// 프로필 이미지 업로드
// form data 형식으로 올려야 함.
const uploadImage = (formData) => {
  return async function (dispatch, getState, { history }) {
    const token = localStorage.getItem("token");
    await api
      .post("/mypage/userProfile", formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        // aws 에 저장된 url 돌아오는지 확인
        console.log(res);
        dispatch(setProfile(res));
      });
  };
};

// 로그아웃
const logout = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    dispatch(logOut());
    history.replace("/");
  };
};

// 5. reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.userId = action.payload.user.userId;
        draft.username = action.payload.user.username;
        draft.email = action.payload.user.email;
        draft.nickname = action.payload.user.nickname;
        draft.userProfile = action.payload.user.userProfile;
        draft.is_login = true;
      }),

    // [GET_USER]: (state, action) => produce(state, (draft) => {}),
    [SET_PROFILE]: (state, action) =>
      produce(state, (draft) => {
        draft.userProfile = action.payload.userProfile;
      }),
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
        console.log("action.payload.preview", action.payload.preview);
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.username = null;
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
  setPreview,
  uploadImage,
  logout,
};

export { actionCreators };

// // 이 부분은 자바스크립트에서 jwt를 디코딩하여 userInfo 를 저장하는 부분
// // 1. 토큰을 .을 기준으로 split 하고 1번째 값을 불러온다.
// // jwt에서 0번째는 header, 1번째는 payload, 2번째는 verify signature 이다.
// // 즉, payload 에 유저 정보가 담겨있으므로 가져오는 것.
// const base64Payload = res.headers.authorization.split(".")[1];

// // base64는 바이너리 데이터를 6비트 단위로 끊어, 인/디코드 하는 인코딩 기법
// // 64 = 2의 6제곱 = 6비트
// // base64payload 를 디코드 하여 buffer 형태의 payload 만듦
// const payload = Buffer.from(base64Payload, "base64");
// console.log(payload);

// // JSON.parse() 메서드는 JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성
// const result = JSON.parse(payload.toString());
// console.log(result);

// //로컬스토리지에 userId 저장
// localStorage.setItem("userId", result.userId);
