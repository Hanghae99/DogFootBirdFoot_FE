import React from "react";
import styled from "styled-components";

const PostComment = (props) => {
  return (
    <>
      <Wrap>
        <Input type="text" placeholder="댓글을 남겨주세요 ~!" />
        <Button>작성!</Button>
      </Wrap>
      <TotalBox>
        <Box>
          <Profile />
          <CommentText>
            <h3>duswo</h3>
            <div>개발세발 댓글 테스트입니다 :)</div>
            <CreateAt>2022-04-05 10:00:00</CreateAt>
          </CommentText>
        </Box>

        <Box>
          <Profile />
          <CommentText>
            <h3>duswo</h3>
            <div>개발세발 댓글 테스트입니다 :)</div>
            <CreateAt>2022-04-05 10:00:00</CreateAt>
          </CommentText>
        </Box>

        <Box>
          <Profile />
          <CommentText>
            <h3>duswo</h3>
            <div>개발세발 댓글 테스트입니다 :)</div>
            <CreateAt>2022-04-05 10:00:00</CreateAt>
          </CommentText>
        </Box>

        <Box>
          <Profile />
          <CommentText>
            <h3>duswo</h3>
            <div>개발세발 댓글 테스트입니다 :)</div>
            <CreateAt>2022-04-05 10:00:00</CreateAt>
          </CommentText>
        </Box>
      </TotalBox>
    </>
  );
};
export default PostComment;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 350px;
`;

const TotalBox = styled.div`
  background-color: #f8c684;
  border-radius: 68px;
  margin: 30px 350px;
  padding: 5px;
`;

const CreateAt = styled.div`
  font-size: small;
  margin: 2px;
  font-weight: lighter;
`;

const Profile = styled.div`
  height: 100px;
  width: 100px;
  background-color: lightgrey;
  border-radius: 100px;
  margin-top: 10px;
`;

const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border-style: none;
  font-size: medium;
  border: 1px solid gray;
  outline: none;
`;

const Button = styled.button`
  font-size: small;
  width: 5%;
  height: 65px;
  margin-left: 5px;
  border-style: none;
  background-color: #d9d9d9;
  cursor: pointer;
`;

const Box = styled.div`
  display: flex;
  justify-content: left;
  margin: 30px;
  padding: 30px;
  border-bottom: 0.5px solid;
  border-color: gray;
`;

const CommentText = styled.div`
  display: block;
  margin-left: 25px;
`;
