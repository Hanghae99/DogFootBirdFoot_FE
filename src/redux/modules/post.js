import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import moment from "moment";
import { api } from "../../shared/api";
import { apis } from "../../shared/api/image";
import { actionCreators as userActions } from "./user";

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
    api.get(`/board/${category}`).then((res) => {
      console.log(res);
      dispatch(setPost(res.data));
    });
  };
};

// 3. 검색
export const searchAPI = (category, searchWord) => {
  return function (dispatch, getState, { history }) {
    api
      .post(`/board/search`, {
        data: {
          category: category,
          searchWord: searchWord,
        },
      })
      .then((post_list) => {
        dispatch(setPost(post_list));
      });
  };
};

// 4. 게시물 올리기
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
        dispatch(getpostAPI());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 5. 상세 게시글 페이지 정보 가져오기
// 토큰이 없어도 받아와져야 함.
export const getonepostAPI = (postId) => {
  const token = localStorage.getItem("token");

  return async function (dispatch, getState, { history }) {
    await api
      .get(`/post/detail/${postId}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((post) => {
        console.log(post.data);
        dispatch(setPost(post.data));
      });
  };
};

// 6. 게시물 지우기
export const deletePostAPI = (postId) => {
  const token = localStorage.getItem("token");

  return function (dispatch, getState, { history }) {
    api
      .delete(`/post/delete/${postId}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        // window.location.href = "/";
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
      }),

    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.posts.filter((post) => post !== action.payload.post);
      }),
  },
  initialPost
);
