import React from "react";
import styled from "styled-components";
import "./PostWrite.css";

const PostWrite = (props) => {
  return (
    <>
      <Total>
        <InputLay>
          <div class="dropdown">
            <button className="dropbtn">언어 선택</button>

            <div className="dropdown-content">
              <a href="#">JAVA</a>
              <a href="#">JS</a>
              <a href="#">PYTHON</a>
              <a href="#">NODE.JS</a>
              <a href="#">SPRING</a>
            </div>
            <h1 className="language">JAVA</h1>
          </div>

          <Input type="text" placeholder="제목을 입력해주세요" />
          <InputContents
            textarea
            cols="30"
            rows="30"
            type="text"
            placeholder="내용을 입력해주세요"
          />
          <InputFile type="file" />

          <Button>게시하기</Button>
        </InputLay>
      </Total>
    </>
  );
};

export default PostWrite;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 0 820px; */
  border-style: none;
  color: #5f5f5f;
  font-weight: 500;
  font-size: medium;
  cursor: pointer;
  background-color: wheat;
  width: 100px;
  padding: 20px;
  margin-left: 500px;
`;

const Input = styled.input`
  display: block;
  justify-content: center;
  align-items: center;
  border-style: none;
  width: 1030px;
  padding: 20px;
  font-size: large;
  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.1);
`;

const InputFile = styled.input`
  display: block;
  justify-content: center;
  align-items: center;
  border-style: none;
  width: 1030px;
  padding: 20px;
`;

const InputContents = styled.textarea`
  display: block;
  justify-content: center;
  align-items: center;
  border-style: none;
  width: 1030px;
  padding: 20px;
  font-size: medium;
  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
`;

const InputLay = styled.div`
  width: 800px;
  padding: 20px;
`;

const Total = styled.div`
  display: flex;
  margin: 0 330px;
`;
