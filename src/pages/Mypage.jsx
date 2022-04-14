import React from "react";
import styled from "styled-components";
import PostList from "../components/Main/postList";
import { Image, Button, Input, Text } from "../elements/index";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";
import { actionCreators as userActions } from "../redux/modules/user";

const MyPage = (props) => {
  const fileInput = React.useRef();
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.user.userId);
  const is_login = useSelector((state) => state.user.is_login);
  const userProfile = useSelector((state) => state.user.userProfile);
  const preview = useSelector((state) => state.user.preview);

  const selectImage = (e) => {
    console.log(e.target.files[0]);
    console.log(fileInput.current.files[0]);
    const file = fileInput.current.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      dispatch(userActions.setPreview(reader.result));
    };
  };

  const uploadImage = (e) => {
    console.log(fileInput.current.files[0]);

    const formData = new FormData();
    const fileImage = fileInput.current.files[0];

    formData.append("images", fileImage);
    dispatch(userActions.uploadImage(formData));
  };

  // 내 포스트, 내 댓글 보기
  const myPost = () => {
    dispatch(userActions.mypostAPI());
  };
  const myComment = () => {
    dispatch(userActions.mycommentAPI());
  };

  return (
    <>
      <Grid>
        <Text size="36px" bold margin="10px">
          마이페이지
        </Text>
      </Grid>
      {/* <Myinfo>
        <Profile>
          <ImageBox>
            <Image
              src={
                preview
                  ? preview
                  : "https://www.newsworks.co.kr/news/photo/202002/433057_327801_345.jpg"
              }
            ></Image>
          </ImageBox>
          <InputFile type="file" onChange={selectImage} ref={fileInput} />
          <Button _onClick={uploadImage}>업로드하기</Button>
        </Profile>
        <Userinfo>
          <Div label="성명" width="60%" margin="10px"></Div>
          <Input label="아이디" width="60%" margin="10px"></Input>
          <Input label="이메일" width="60%" margin="10px"></Input>
        </Userinfo>
      </Myinfo> */}

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
          <Button
            width="auto"
            margin="10px"
            padding="10px"
            bg="white"
            color="black"
            _onClick={myComment}
          >
            내가 쓴 댓글
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
const Myinfo = styled.div`
  display: flex;
  margin: 0 300px;
  min-width: 30%;
  max-width: 80%;
  flex-direction: row;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const ImageBox = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 70%;
  overflow: hidden;
  margin: 10px;
`;

const InputFile = styled.input`
  justify-content: center;
  align-items: center;
  border-style: none;
  width: 80%;
  padding: 10px;
  color: "#fff";
  background-color: "#298D49";
`;

const Userinfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const Div = styled.div``;

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
