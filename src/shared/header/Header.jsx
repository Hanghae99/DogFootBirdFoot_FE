import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import { history } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";

const Header = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const userInfo = useSelector((state) => state.user.user);

  //Header분기

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
        dispatch(userActions.logOut());
        break;
      default:
        return;
    }
  };

  //로그인 여부 확인
  React.useEffect(() => {
    dispatch(userActions.isLogin());
  }, [dispatch]);

  //로그인 하기 전
  if (is_login === false) {
    return (
      <>
        <Wrapper>
          <Logo
            name="logo"
            onClick={() => {
              history.push("/");
            }}
          >
            개발세발🐶
          </Logo>

          <Div>
            <p>로그인 하고 둘러보는 건 어때요? :) </p>
            <HeaderButton name="login" onClick={onClick}>
              로그인
            </HeaderButton>
            <HeaderButton name="signup" onClick={onClick}>
              회원가입
            </HeaderButton>
          </Div>
        </Wrapper>
      </>
    );
  }

  if (is_login === true) {
    return (
      <>
        <Wrapper>
          <Logo
            name="logo"
            onClick={() => {
              history.push("/");
            }}
          >
            개발세발🐶
          </Logo>

          <Div>
            <p>어서오세요, {userInfo}님!</p>
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
};

export default Header;

const Logo = styled.div`
  display: flex;
  justify-content: left;
  margin: 25px;
  cursor: pointer;
  color: #5f5f5f;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: blanchedalmond;
  margin: 0 350px;
`;

const HeaderButton = styled.button`
  cursor: pointer;
  color: #5f5f5f;
  background-color: transparent;
  border: none;

  & + & {
    margin-left: 15px;
  }

  &:hover {
    color: tomato;
  }
`;

// const Btn = styled.div`
//   cursor: pointer;
//   color: #5f5f5f;
// `;

const Div = styled.div`
  display: flex;
  justify-content: right;
  margin: 25px;

  p {
    margin: 0;
    padding: 0;
    margin-right: 15px;
  }
`;
