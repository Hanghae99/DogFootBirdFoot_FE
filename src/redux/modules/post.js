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
const initialPost = {
  posts: {
    postId: 1,
    category: "JAVA",
    postTitle: "질문테스트입니다",
    postContents: "내용 테스트입니다",
    nickname: "YeonnJ",
    commentCount: 50,
    likeCount: 500,
    createdAt: moment().format("YYYY-MM-DD"),
  },
};

//미들웨어

// 리듀서
export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {}),

    [ADD_POST]: (state, action) => produce(state, (draft) => {}),

    [DELETE_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialPost
);

// 액션생성자 내보냄
const actionCreators = {
  setPost,
  deletePost,
  addPost,
};

export { actionCreators };
