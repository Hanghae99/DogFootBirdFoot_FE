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
export const getComment = createAction(GET_COMMENT, (comments) => ({
  comments,
}));
export const addComment = createAction(ADD_COMMENT, (postId, comment) => ({
  postId,
  comment,
}));
export const editComment = createAction(
  EDIT_COMMENT,
  (commentId, newComment) => ({ commentId, newComment })
);
export const deleteComment = createAction(
  DELETE_COMMENT,
  (commentId, itemId) => ({
    commentId,
    itemId,
  })
);

//미들웨어
export const addCommentDB = (postId, comment) => {
  const token = localStorage.getItem("token");

  return async function (dispatch, getState, { history }) {
    await axios
      .post(
        `http://121.141.140.148:8089/api/post/detail/${postId}/comment`,
        { comment },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(addComment(postId, res.data));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getCommentDB = (postId) => {
  const token = localStorage.getItem("token");
  return async function (dispatch, getState, { history }) {
    await axios
      .get(`http://121.141.140.148:8089/api/post/detail/${postId}/comment`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        dispatch(getComment(res.data));

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteCommentDB = (commentId, itemId) => {
  const token = localStorage.getItem("token");

  return async function (dispatch, getState, { history }) {
    await axios
      .delete(
        `http://121.141.140.148:8089/api/post/detail/comment/${commentId}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log(itemId);
        dispatch(deleteComment(commentId));
        window.alert("삭제가 완료되었어요!");
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
      comments: "안녕하세요, 댓글 테스트입니다.",
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
        draft.comments = action.payload.comments;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comments.unshift(action.payload.comment);
        console.log(state);
      }),
    [EDIT_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log("수정할거야");
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comments.shift((itemId) => itemId !== action.payload.comments);
      }),
  },
  initialComment
);
