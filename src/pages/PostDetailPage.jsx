import React from "react";
import PostComment from "../components/postDetail/PostComment";
import PostDetail from "../components/postDetail/PostDetail";

const PostDetailPage = (props) => {
  return (
    <>
      <PostDetail />
      <PostComment />
    </>
  );
};
export default PostDetailPage;
