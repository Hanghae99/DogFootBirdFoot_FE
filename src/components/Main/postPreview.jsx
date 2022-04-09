import React from "react";
import styled from "styled-components";

const PostPreview = (props) => {
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
          <Comment>
            <div>
              <i className="fa-solid fa-comment-dots"></i> 12개
            </div>
            <LikeComment>
              <i className="fa-solid fa-heart"></i> 120개
            </LikeComment>
          </Comment>
        </div>
      </Box>
    </>
  );
};

export default PostPreview;

const Box = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 1px 4px 4px 4px rgba(0, 0, 0, 0.15);
  margin: 30px 20px;
  padding: 0px;
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
