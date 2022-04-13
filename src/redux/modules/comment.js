import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import axios from "axios";

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

//미들웨어
export const addCommentDB = (comment) => {
  return async function (dispatch, getState, { history }) {
    axios.post
      .then((res) => {
        dispatch(addComment(comment));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getCommentDB = () => {
  return async function (dispatch, getState, { history }) {
    axios
      .get(`http://192.168.0.7:8085/api/post/detail/comment`)
      .then((res) => {
        dispatch(getComment());
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
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
