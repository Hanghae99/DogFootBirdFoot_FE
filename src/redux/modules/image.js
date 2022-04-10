import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const GET_IMAGE_URL = "GET_IMAGE_URL";
const ADD_IMAGE_URL = "ADD_IMAGE_URL";

const getImageUrl = createAction(GET_IMAGE_URL, (imageUrl) => ({ imageUrl }));
const addImageUrl = createAction(ADD_IMAGE_URL, (imageUrl) => ({ imageUrl }));

// 기본값 지정
const initialState = {
  imageUrl: "",
};

//미들웨어

// 리듀서
export default handleActions(
  {
    [GET_IMAGE_URL]: (state, action) =>
      produce(state, (draft) => {
        draft.imageUrl = action.payload.imageUrl;
      }),
    [ADD_IMAGE_URL]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// 액션생성자 내보냄
const actionCreators = {
  getImageUrl,
  addImageUrl,
};

export { actionCreators };
