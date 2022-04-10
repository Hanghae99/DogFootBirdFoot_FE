import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PostDetail = (props) => {
  const post = useSelector((state) => state.post.posts);
  console.log(post);

  return (
    <>
      <Box>
        <LanBox>
          <h2>{post.category}</h2>
        </LanBox>

        <div>
          <Question>{post.postContents}</Question>
        </div>
      </Box>

      <Comment>
        <div>
          <i className="fa-solid fa-comment-dots"></i> {post.commentCount}개
        </div>
        <LikeComment>
          <i className="fa-solid fa-heart"></i> {post.likeCount}개
        </LikeComment>
      </Comment>
    </>
  );
};

export default PostDetail;

const Box = styled.div`
  display: flex;
  justify-content: left;
  box-shadow: 1px 4px 4px 4px rgba(0, 0, 0, 0.15);
  margin: 30px 350px;
  padding: 30px;
`;

// const Img = styled.img`
//   width: 500px;
//   height: 350px;
//   justify-content: center;
//   display: flex;
//   align-items: center;
//   margin-left: 30px;
// `;

const Question = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px;
`;

const Comment = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 0 350px;
`;

const LikeComment = styled.div`
  margin-left: 20px;
  color: #f25430;
`;

const LanBox = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  background-color: #298d49;
  width: 120px;
  height: 100px;
  border-radius: 40%;
  color: #f9c785;
`;
