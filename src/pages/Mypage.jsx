import React from "react";
import styled from "styled-components";
import PostPreview from "../components/Main/postPreview";
import { Image, Button, Input, Text } from "../elements/index";

const Mypage = (props) => {
  return (
    <>
      <Grid>
        <h1>마이페이지입니당</h1>
      </Grid>
      <Myinfo>
        <div>
          <Image></Image>
          <Button width="200px">이미지 수정하기</Button>
        </div>
        <div>
          <Input label="성명" width="500px" margin="10px"></Input>
          <Input label="아이디" width="500px" margin="10px"></Input>
          <Input label="이메일" width="500px" margin="10px"></Input>
        </div>
      </Myinfo>

      <Wrap>
        <Tap>
          <button>내가 쓴 글</button>
          <button>내가 쓴 댓글</button>
        </Tap>
        <PostPreview></PostPreview>
        <PostPreview></PostPreview>
        <PostPreview></PostPreview>
        <PostPreview></PostPreview>
      </Wrap>
    </>
  );
};

const Grid = styled.div`
  margin: 0 350px;
  flex-direction: column;
`;
const Myinfo = styled.div`
  display: flex;
  margin: 0 350px;
  flex-direction: row;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`;

const Tap = styled.ul`
  margin: 0px;
  flex-direction: column;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`;
const Wrap = styled.div`
  margin: 0 350px;
  flex-direction: column;
  padding: 20px 0px 50px 0px;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`;

export default Mypage;
