import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  getCommentDB,
  addCommentDB,
  deleteCommentDB,
  editComment,
} from "../../redux/modules/comment";

const PostComment = ({ comments }) => {
  const [commentValue, setCommentValue] = useState("");
  const dispatch = useDispatch();
  const postId = useSelector((state) => state.post.posts.postId);
  const comment = useSelector((state) => state.comment.comments);

  const onChange = (e) => {
    const { value } = e.target;
    setCommentValue(value);
  };

  const onAddComment = (e) => {
    e.preventDefault();

    dispatch(addCommentDB(postId, commentValue));
  };

  const onDeleteComment = (e) => {
    dispatch(deleteCommentDB(comment));
    console.log("이제 삭제할거야!");
  };

  const onEditComment = (e) => {
    dispatch(editComment(comment));
  };

  return (
    <>
      <FormContainer onSubmit={onAddComment}>
        <Input
          type="text"
          placeholder="댓글을 남겨주세요 ~!"
          onChange={onChange}
        />
        <Button>작성!</Button>
      </FormContainer>
      <TotalBox>
        {comment.map((item) => (
          <Box key={item.id}>
            <Profile />
            <CommentText>
              <h3>{item.nickname}</h3>
              <div>{item.comments}</div>
              <button onClick={onDeleteComment}>삭제</button>
              <button onClick={onEditComment}>수정</button>

              <CreateAt>{item.createdAt}</CreateAt>
            </CommentText>
          </Box>
        ))}
      </TotalBox>
    </>
  );
};
export default PostComment;

const FormContainer = styled.form`
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
