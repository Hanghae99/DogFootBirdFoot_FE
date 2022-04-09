import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button } from "../elements";

const Login = (props) => {
  return (
    <LoginWrap>
      <Text size="30px" bold margin="0px 0px 30px 0px">
        로그인
      </Text>
      <Input placeholder="아이디를 입력해주세요" />
      <Input
        placeholder="비밀번호를 입력해주세요"
        type="password"
        margin="10px 0px"
      />
      <Button margin="17px 0px 0px 0px">로그인</Button>
      <Button margin="10px" bg="#ffffff" color="#111111">
        회원가입
      </Button>
    </LoginWrap>
  );
};

const LoginWrap = styled.div`
  margin: 0 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 90px 0px 120px 0px;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`;

const Text = styled.p`
  color: #111;
  font-size: 30px;
`;

export default Login;
