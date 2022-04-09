import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { actionCreators as postActions } from "./post";
import moment from "moment";

// Actions Types
const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

// Action Creators
const getComment = createAction(GET_COMMENT, (postId, comments) => ({
  postId,
  comments,
}));
const addComment = createAction(ADD_COMMENT, (postId, comment) => ({
  postId,
  comment,
}));
const editComment = createAction(
  EDIT_COMMENT,
  (postId, commentId, newComment) => ({ postId, commentId, newComment })
);
const deleteComment = createAction(DELETE_COMMENT, (postId, commentId) => ({
  postId,
  commentId,
}));

const initialComment = {
  comments: {
    id: 1,
    nickname: "연재몬",
    comment: "안녕하세요, 댓글 테스트입니다.",
    userProfile: "2021-12-09T10:28:46.000Z",
    createdAt: "2021-12-09T10:28:46.000Z",
    userId: 2,
  },
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
        draft.list[action.payload.postId].unshift(action.payload.comment);
      }),
    [EDIT_COMMENT]: (state, action) => produce(state, (draft) => {}),
    [DELETE_COMMENT]: (state, action) => produce(state, (draft) => {}),
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
