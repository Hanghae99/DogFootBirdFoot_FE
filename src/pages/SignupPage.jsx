import React from "react";
import styled from "styled-components";
import { Input, Button } from "../elements";

const SignupPage = (props) => {
  return (
    <SignupWrap>
      <Text size="30px" bold margin="0px 0px 30px 0px">
        회원가입
      </Text>
      <Input placeholder="아이디를 입력해주세요" margin="10px" />
      <Button margin="10px" bg="#ffffff" color="#111111">
        아이디 중복 체크
      </Button>
      <Input placeholder="이메일을 입력해주세요" type="email" margin="10px" />
      <Input placeholder="닉네임을 입력해주세요" margin="10px" />
      <Input
        placeholder="설정할 비밀번호를 입력해주세요"
        type="password"
        margin="10px"
      />

      <Input
        placeholder="비밀번호를 다시 입력해주세요"
        type="password"
        margin="10px"
      />
      <Button margin="10px">회원가입</Button>
    </SignupWrap>
  );
};

const SignupWrap = styled.div`
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

export default SignupPage;
