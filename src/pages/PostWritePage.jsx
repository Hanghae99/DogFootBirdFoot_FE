import React from "react";
import PostWrite from "../components/postWrite/PostWrite";
import styled from "styled-components";

const PostWritePage = (props) => {
  return (
    <>
      <Wrap>
        <PostWrite />
      </Wrap>
    </>
  );
};

export default PostWritePage;

const Wrap = styled.div`
  margin-left: 300px;
  margin-top: 20px;
`;
