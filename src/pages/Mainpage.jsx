import React from "react";
import styled from "styled-components";
import PostPreview from "../components/Main/postPreview";

const MainPage = (props) => {
  return (
    <>
      <Tap>
        <h1>메인페이지입니당</h1>
        <button>카테고리1</button>
        <button>카테고리2</button>
        <button>카테고리3</button>
        <button>카테고리4</button>
        <button>카테고리5</button>
      </Tap>

      <Wrap>
        <PostPreview />
      </Wrap>
    </>
  );
};

const Tap = styled.ul`
  margin: 0 350px;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`;

const Wrap = styled.div`
  margin: 0 350px;
  flex-direction: column;
  padding: 90px 0px 120px 0px;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`;

export default MainPage;
