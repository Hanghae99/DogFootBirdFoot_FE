import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PostList = (props) => {
  const postlist = useSelector((state) => state.post.posts);

  const user_info = useSelector((state) => state.user.user);
  console.log(user_info);
  console.log(postlist);

  const { history } = props;
  return (
    <>
      {postlist.map((item) => (
        <Box key={item.id} onClick={() => history.push(`/post/${item.id}`)}>
          <LanBox>
            <h2>{item.category}</h2>
          </LanBox>
          <div>
            <Question>{item.postTitle}</Question>
            <Comment>
              <div>
                <i className="fa-solid fa-comment-dots"></i> {item.commentCount}
                개
              </div>
              <LikeComment>
                <i className="fa-solid fa-heart"></i> {item.likeCount}개
              </LikeComment>
            </Comment>
          </div>
        </Box>
      ))}
    </>
  );
};

export default PostList;

const Box = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  box-shadow: 1px 4px 4px 4px rgba(0, 0, 0, 0.15);
  margin: 30px 20px;
  padding: 10px;
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

const Comment = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 0 0 10px 0;
`;

const Question = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 60px;
`;

const LikeComment = styled.div`
  margin-left: 20px;
  color: #f25430;
`;
