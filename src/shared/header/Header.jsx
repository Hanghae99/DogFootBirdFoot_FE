import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import { Text } from "../../elements/index";
import logo from "./logo.png";

const Header = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  //리덕스 데이터 is_login 으로 로그인여부 체크
  const is_login = useSelector((state) => state.user.is_login);
  const token = localStorage.getItem("token") ? true : false;
  const nickname = useSelector((state) => state.user.nickname);

  console.log(is_login);
  console.log(token);

  const onClick = (e) => {
    const { name } = e.target;
    switch (name) {
      case "login":
        history.push("/login");
        break;
      case "signup":
        history.push("/signup");
        break;
      case "mypage":
        history.push("/mypage");
        break;
      case "logout":
        dispatch(userActions.logout());
        break;
      default:
        return;
    }
  };

  if (is_login && token) {
    return (
      <>
        <Wrapper>
          <Logo
            name="logo"
            onClick={() => {
              history.push("/");
            }}
          >
            <img src={logo} alt="logo" width="150" height="150"></img>
          </Logo>

          <Div>
            <Text margin="0 50px 0 0" bold size="25px" color="#403C34">
              어서오세요, {nickname}님!
            </Text>
            <HeaderButton name="mypage" onClick={onClick}>
              마이페이지
            </HeaderButton>
            <HeaderButton name="logout" onClick={onClick}>
              로그아웃
            </HeaderButton>
          </Div>
        </Wrapper>
      </>
    );
  }

  //로그인 하기 전
  return (
    <>
      <Wrapper>
        <Logo
          name="logo"
          onClick={() => {
            history.push("/");
          }}
        >
          <img src={logo} alt="logo" width="150" height="150"></img>
        </Logo>

        <Div>
          <Text color="#F2EED8" bold size="30px">
            로그인 하고 둘러보는 건 어때요?{" "}
          </Text>
          <HeaderButton name="login" onClick={onClick}>
            LOG IN
          </HeaderButton>
          <HeaderButton name="signup" onClick={onClick}>
            SIGN UP
          </HeaderButton>
        </Div>
      </Wrapper>
    </>
  );
};

export default Header;

const Logo = styled.div`
  display: flex;
  justify-content: left;
  margin: 0 0 0 20px;
  cursor: pointer;
  color: #5f5f5f;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
  background-color: #bf815e;
  margin: 0px;
`;

const HeaderButton = styled.button`
  // cursor: pointer;
  color: wheat;
  font-size: 20px;
  background-color: #8c7158;
  border: 1px solid;
  border-style: none;
  border-radius: 30px;
  padding: 10px;

  & + & {
    margin-left: 15px;
  }

  // &:hover {
  //   color: white;
  //   font-weight: 600;
  // }
`;

const Div = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 0px 50px;

  p {
    margin: 0;
    padding: 0;
    margin-right: 15px;
  }
`;
