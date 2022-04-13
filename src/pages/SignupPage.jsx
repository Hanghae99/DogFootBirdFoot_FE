import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button, Text } from "../elements";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { api } from "../shared/api";

const SignUpPage = (props) => {
  const [id, setId] = useState("");
  const [idDup, setIdDup] = useState(false);
  const [nickName, setNickName] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setpwCheck] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const idcheckAPI = (id) => {
    api
      .post("/user/dupliChk", {
        username: id,
      })
      .then((res) => {
        setIdDup(true);
        console.log(res);
        window.alert(res);
      })
      .catch((err) => {
        console.log(err.response);
        window.alert(err.response);
      });
  };

  const signUp = () => {
    if (
      id === "" ||
      pw === "" ||
      pwCheck === "" ||
      nickName === "" ||
      email === ""
    ) {
      window.alert("위 입력란을 모두 입력해주세요.");
      return false;
    }

    if (idDup === false) {
      alert("아이디 중복 여부를 확인해주세요.");
      return false;
    }

    if (pw !== pwCheck) {
      alert("비밀번호를 다시 확인해주세요.");
      return false;
    }

    if (nickName === "") {
      alert("닉네임을 입력해주세요.");
      return false;
    }

    if (email === "") {
      alert("이메일을 입력해주세요.");
      return false;
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
          setId(e.target.value);
        }}
      />
      <Button
        margin="10px"
        bg="#fff2e5"
        color="#111111"
        _onClick={() => idcheckAPI(id)}
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
        autoComplete="off"
        _onChange={(e) => {
          setNickName(e.target.value);
        }}
      />
      <Input
        placeholder="설정할 비밀번호를 입력해주세요"
        type="new-password"
        margin="10px "
        autoComplete="off"
        _onChange={(e) => {
          setPw(e.target.value);
        }}
      />

      <Input
        placeholder="비밀번호를 다시 입력해주세요"
        type="new-password"
        margin="10px"
        _onChange={(e) => {
          setpwCheck(e.target.value);
        }}
      />
      <Button bold margin="10px" _onClick={signUp}>
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

const Form = styled.form`
  padding: 0px;
`;
export default SignUpPage;
