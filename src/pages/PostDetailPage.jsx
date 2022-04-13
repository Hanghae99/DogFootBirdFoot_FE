import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PostComment from "../components/postDetail/PostComment";
import PostDetail from "../components/postDetail/PostDetail";
import { getCommentDB } from "../redux/modules/comment";

const PostDetailPage = (props) => {
  const postId = useSelector((state) => state.post.posts.postId);
  const dispatch = useDispatch();
  const comment = useSelector((state) => state);
  const postIdNum = postId;
  console.log(postId);

  React.useEffect(() => {
    dispatch(getCommentDB(postId));
  }, [postId]);

  return (
    <>
      <PostDetail />
      <PostComment comments={comment} />
    </>
  );
};
export default PostDetailPage;
