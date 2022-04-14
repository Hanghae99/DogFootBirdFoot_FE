import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getonepostAPI, deletePostAPI } from "../../redux/modules/post";
import { Image, Button, Grid } from "../../elements/index";

const PostDetail = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const postlist = useSelector((state) => state.post.posts);
  const comment = useSelector((state) => state);
  console.log(comment.comment.comments);

  const commentLength = comment.comment.comments.length;

  console.log(history.location.state.state);
  // console.log(typeof history.location.state.state);

  // 왠지는 모르지만 props 못 받아옴
  // const id = props;
  // console.log(id);

  // useParams 는 받아오긴 하는데 object 형태로 받아옴
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

  React.useEffect(() => {
    const post_idx = postlist.findIndex((p) => p.postId === postIdNum);

    console.log(post_idx);
    const post = postlist[post_idx];
    console.log(post);

    dispatch(getonepostAPI(postIdNum));
  }, []);

  // console.log(post);

  const onClick = (e) => {
    dispatch(deletePostAPI(userId, postIdNum));
  };

  return (
    <>
      <Box>
        <LanBox>
          <h2>{postlist.category}</h2>
        </LanBox>

        <div>
          <Question>{postlist.postContents}</Question>
        </div>
        <Button width="10%" height="10%" _onClick={onClick}>
          삭제
        </Button>
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

// const LikeComment = styled.div`
//   margin-left: 20px;
//   color: #f25430;
// `;

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
