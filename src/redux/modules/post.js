import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import moment from "moment";
import { api } from "../../shared/api";
import { apis } from "../../shared/api/image";

// 액션 타입 지정
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";

// 액션 생성 함수
export const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
export const addPost = createAction(ADD_POST, (post) => ({ post }));
export const deletePost = createAction(DELETE_POST, (post) => ({ post }));

// 기본값 지정
const initialPost = {
  posts: [
    {
      postId: 1,
      category: "JAVA",
      postTitle: "질문테스트입니다",
      postContents: "내용 테스트입니다",
      nickname: "YeonnJ",
      commentCount: 50,
      likeCount: 500,
      createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
    },
  ],
};

//미들웨어
//1. 메인페이지 클릭, 자바 카테고리 가져오기
export const getpostAPI = () => {
  return function (dispatch, getState, { history }) {
    const category = "JAVA";
    api
      .get(`/board/${category}`)
      .then((res) => {
        dispatch(setPost(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 2. 메인페이지에서 카테고리 클릭
export const getCategoryAPI = (category) => {
  return function (dispatch, getState, { history }) {
    api.get("/board/${category}")((post_list) => {
      dispatch(setPost(post_list));
    });
  };
};

// 3. addPost
export const addPostAPI = (select, postTitleValue, postContentValue) => {
  const token = localStorage.getItem("token");
  return async function (dispatch, getState, { history }) {
    await api
      .post(
        `/post/write`,
        {
          category: select,
          postTitle: postTitleValue,
          postContents: postContentValue,
          imageUrl: null,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(addPost(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 리듀서
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.posts = action.payload.post_list;
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.posts.unshift(action.payload.post);
        console.log(state);
      }),

    [DELETE_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialPost
);
