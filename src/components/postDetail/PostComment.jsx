import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const PostComment = (props) => {
  const comment = useSelector((state) => state.comment.comments);
  console.log(comment);
  return (
    <>
      <Wrap>
        <Input
          type="text"
          placeholder="댓글을 남겨주세요 ~!"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <Button>작성!</Button>
      </Wrap>
      <TotalBox>
        <Box>
          <Profile />
          <CommentText>
            <h3>{comment.nickname}</h3>
            <div>{comment.comment}</div>
            <CreateAt>{comment.createAt}</CreateAt>
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
