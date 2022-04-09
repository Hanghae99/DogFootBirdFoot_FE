import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import moment from "moment";

// 액션 타입 지정
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";

// 액션 생성 함수
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const deletePost = createAction(DELETE_POST, (post) => ({ post }));
// 기본값 지정

const initalPost = {
  category: "",
  postTitle: "",
  postContents: "",
  nickname: "",
  imageUrl:
    "https://newsimg.hankookilbo.com/cms/articlerelease/2021/06/05/ef519975-80c8-40b6-b25a-47ab6270dc60.png",
  createdAt: moment().format("YYYY-MM-DD"),
};

//미들웨어

// 리듀서
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }), // 리스트를 초기값에서 갈아끼우기
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post;
        console.log(draft.list);
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        // draft.study.joinNum -= 1;
        // draft.join = action.payload.join
      }),
  },
  initalPost
);

// 액션생성자 내보냄
const actionCreators = {
  setPost,
  deletePost,
  addPost,
};

export { actionCreators };
