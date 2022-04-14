import React from "react";
import styled from "styled-components";
import PostList from "../components/Main/postList";
import { Image, Button, Input, Text } from "../elements/index";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";
import { actionCreators as userActions } from "../redux/modules/user";

const MyPage = (props) => {
  const dispatch = useDispatch();
  // const fileInput = React.useRef();

  // const selectImage = (e) => {
  //   console.log(e.target.files[0]);
  //   console.log(fileInput.current.files[0]);
  //   const file = fileInput.current.files[0];

  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);

  //   reader.onloadend = () => {
  //     dispatch(userActions.setPreview(reader.result));
  //   };
  // };

  // const uploadImage = (e) => {
  //   console.log(fileInput.current.files[0]);

  //   const formData = new FormData();
  //   const fileImage = fileInput.current.files[0];

  //   formData.append("images", fileImage);
  //   dispatch(userActions.uploadImage(formData));
  // };

  // 내 포스트
  const myPost = () => {
    dispatch(userActions.mypostAPI());
  };
  return (
    <>
      <Grid>
        <Text size="36px" bold margin="10px">
          마이페이지
        </Text>
      </Grid>
      <Wrap>
        <Tap>
          <Button
            width="auto"
            margin="10px"
            padding="10px"
            bg="white"
            color="black"
            _onClick={myPost}
          >
            내가 쓴 글
          </Button>
        </Tap>
        <PostList></PostList>
      </Wrap>
    </>
  );
};

const Grid = styled.div`
  margin: 0 300px;
  flex-direction: column;
`;

const Tap = styled.ul`
  margin: 0px;
  flex-direction: column;
`;
const Wrap = styled.div`
  margin: 0 300px;
  flex-direction: column;
  padding: 20px 0px 50px 0px;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`;

export default MyPage;
