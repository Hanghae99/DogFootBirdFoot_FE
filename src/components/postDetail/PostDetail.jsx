import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getonepostAPI, deletePostAPI } from "../../redux/modules/post";
import { Image, Grid } from "../../elements/index";

const PostDetail = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const postlist = useSelector((state) => state.post.posts);
  const comment = useSelector((state) => state);
  console.log(comment.comment.comments);

  const commentLength = comment.comment.comments.length;

  console.log(history.location.state.state);

  const postId = useParams();
  console.log(postId);
  console.log(typeof postId);
  console.log(postId.postId);
  console.log(typeof postId.postId);

  const postIdNum = Number(postId.postId);

  const postIdjson = JSON.stringify(postId);
  console.log(postIdjson);
  console.log(typeof postIdjson);
  console.log(postIdjson.postId);

  const userId = useSelector((state) => state.user.userId);
  const userIdNum = Number(userId);

  React.useEffect(() => {
    const post_idx = postlist.findIndex((p) => p.postId === postIdNum);

    console.log(post_idx);
    const post = postlist[post_idx];
    console.log(post);

    dispatch(getonepostAPI(postIdNum));
  }, []);

  console.log(userIdNum);
  console.log(typeof userIdNum);
  console.log(postIdNum);
  console.log(typeof postIdNum);

  // const onClick = (e) => {
  //   dispatch(deletePostAPI(postIdNum));
  // };

  return (
    <>
      <Box>
        <LanBox>
          <h2>{postlist.category}</h2>
        </LanBox>

        <div>
          <Question>{postlist.postContents}</Question>
          {/* <Button width="5%" height="10%" onClick={onClick}>
            삭제
          </Button> */}
        </div>
      </Box>
      <Comment>
        <div>
          <i className="fa-solid fa-comment-dots"></i> {commentLength}개
        </div>
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

const Question = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

const Comment = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 0 350px;
`;

const Button = styled.button`
  font-size: small;
  width: 10%;
  margin-left: 800px;
  border-style: none;
  color: #298d49;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: wheat;
  padding: 20px;
  height: 55px;
  /* margin-top: 10px; */
  font-weight: 400;
  font-size: 15px;
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
