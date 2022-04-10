import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";

// Actions Types
const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

// Action Creators
export const getComment = createAction(GET_COMMENT, (postId, comments) => ({
  postId,
  comments,
}));
export const addComment = createAction(ADD_COMMENT, (comment) => ({
  comment,
}));
export const editComment = createAction(
  EDIT_COMMENT,
  (postId, commentId, newComment) => ({ postId, commentId, newComment })
);
export const deleteComment = createAction(
  DELETE_COMMENT,
  (postId, commentId) => ({
    postId,
    commentId,
  })
);

const initialComment = {
  comments: [
    {
      id: 1,
      postsId: 1,
      userId: 2,
      nickname: "연재몬",
      comment: "안녕하세요, 댓글 테스트입니다.",
      userProfile: "2021-12-09T10:28:46.000Z",
      createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
    },
    {
      id: 2,
      postsId: 1,
      userId: 2,
      nickname: "연재몬",
      comment: "안녕하세요, 댓글 테스트입니다.",
      userProfile: "2021-12-09T10:28:46.000Z",
      createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
    },
  ],
};

// Reducer
export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comments[action.payload.postId] = action.payload.comments;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comments.unshift(action.payload.comment);
      }),
    [EDIT_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log("수정할거야");
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comments.shift(action.payload.comment);
      }),
  },
  initialComment
);

const actionCreators = {
  getComment,
  addComment,
  editComment,
  deleteComment,
};

export { actionCreators };
