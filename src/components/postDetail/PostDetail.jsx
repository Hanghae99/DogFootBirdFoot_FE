import React from "react";
import styled from "styled-components";

const PostDetail = (props) => {
  return (
    <>
      <Box>
        <LanBox>
          <h2>PYTHON</h2>
        </LanBox>

        <div>
          <Question>
            Python을 사용하면 구조화 된 스타일로 프로그래밍 할 수 있나요?
          </Question>
          <Img src="https://cdn.codingworldnews.com/news/photo/202102/img_2446_0.jpg"></Img>
        </div>
      </Box>

      <Comment>
        <div>
          <i className="fa-solid fa-comment-dots"></i> 12개
        </div>
        <LikeComment>
          <i className="fa-solid fa-heart"></i> 120개
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

const Img = styled.img`
  width: 500px;
  height: 350px;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

const Question = styled.div`
  display: flex;
  justify-content: left;
  margin: 30px;
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
