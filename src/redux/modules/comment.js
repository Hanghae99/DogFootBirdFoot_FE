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
export const addComment = createAction(ADD_COMMENT, (postId, comments) => ({
  postId,
  comments,
}));
export const editComment = createAction(
  EDIT_COMMENT,
  (commentId, newComment) => ({ commentId, newComment })
);
export const deleteComment = createAction(DELETE_COMMENT, (comment) => ({
  comment,
}));

//미들웨어
export const addCommentDB = (comment) => {
  const token = localStorage.getItem("token");

  return async function (dispatch, getState, { history }) {
    await axios
      .post(
        `http://121.141.140.148:8089/api/post/detail/1/comment`,
        { comment },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
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
    await axios
      .get(`http://192.168.0.7:8089/api/post/detail/comment`)
      .then((res) => {
        console.log(res);
        dispatch(getComment(res.commentList.comment));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteCommentDB = () => {
  return async function (dispatch, getState, { history }) {
    await axios
      .delete(`http://192.168.0.7:8089/api/post/detail/comment`)
      .then((res) => {
        console.log(res);
        dispatch(deleteComment(res.commentList.comment));
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
