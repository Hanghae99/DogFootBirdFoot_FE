import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  getCommentDB,
  addCommentDB,
  deleteCommentDB,
  editComment,
} from "../../redux/modules/comment";

const PostComment = (props) => {
  const [commentValue, setCommentValue] = useState("");
  const dispatch = useDispatch();
  const postId = useSelector((state) => state.post.posts.postId);
  const comment_list = useSelector((state) => state.comment.comments);

  const onChange = (e) => {
    const { value } = e.target;
    setCommentValue(value);
  };

  const onAddComment = (e) => {
    e.preventDefault();

    dispatch(addCommentDB(postId, commentValue));
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
        {comment_list.map((item) => (
          <Box key={item.id}>
            <CommentText>
              <h3>{item.nickname}</h3>
              <div>{item.comments}</div>
              <CreateAt>{item.createdAt}</CreateAt>
            </CommentText>
            <ButtonDel
              onClick={(e) => {
                dispatch(deleteCommentDB(item.commentId, item.id));
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </ButtonDel>
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
  border-radius: 35px;
  margin: 30px 350px;
  /* padding: 5px; */
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
  justify-content: space-between;
  margin: 30px;
  padding: 30px;
  border-bottom: 0.3px solid;
  border-color: gray;
`;

const CommentText = styled.div`
  display: block;
  justify-content: space-between;
  align-items: center;
  margin-left: 25px;
  margin-top: 15px;
`;

const ButtonDel = styled.button`
  display: flex;
  border-style: none;
  padding: 20px;
  height: 55px;
  margin-top: 10px;
  background-color: #298d49;
  color: white;
  cursor: pointer;
`;
