import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button, Text } from "../elements";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { api } from "../shared/api";

const SignUpPage = (props) => {
  const [id, setId] = useState("");
  const [nickName, setNickName] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setpwCheck] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const changeId = (e) => {
    setId(e.target.value);
  };

  const changePw = (e) => {
    const targetPw = e.target.value;
    setPw(targetPw);
  };

  const signUp = () => {
    if (
      id === "" ||
      pw === "" ||
      pwCheck === "" ||
      nickName === "" ||
      email === ""
    ) {
      alert("위에 내용들을 채워주세요.");
      return;
    }

    if (pw !== pwCheck) {
      alert("비밀번호를 다시 확인해주세요.");
      return;
    }

    if (nickName === "") {
      alert("닉네임을(를) 입력해주세요.");
      return;
    }

    if (email === "") {
      alert("이메일을 입력해주세요.");
      return;
    }

    dispatch(userActions.signupAPI(id, nickName, pw, email));
  };

  return (
    <SignupWrap>
      <Text size="30px" bold margin="0px 0px 30px 0px">
        회원가입
      </Text>
      <Input
        placeholder="아이디를 입력해주세요"
        margin="10px"
        _onChange={(e) => {
          changeId(e);
        }}
      />
      <Button
        margin="10px"
        bg="#ffffff"
        color="#111111"
        _onClick={() => dispatch(userActions.idcheckAPI(id, pw))}
      >
        아이디 중복 체크
      </Button>
      <Input
        placeholder="이메일을 입력해주세요"
        type="email"
        margin="10px"
        _onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        placeholder="닉네임을 입력해주세요"
        margin="10px"
        _onChange={(e) => {
          setNickName(e.target.value);
        }}
      />
      <Input
        placeholder="설정할 비밀번호를 입력해주세요"
        type="password"
        margin="10px"
        _onChange={(e) => {
          changePw(e);
        }}
      />

      <Input
        placeholder="비밀번호를 다시 입력해주세요"
        type="password"
        margin="10px"
        _onChange={(e) => {
          setpwCheck(e.target.value);
        }}
      />
      <Button margin="10px" _onClick={signUp}>
        회원가입
      </Button>
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

export default SignUpPage;
