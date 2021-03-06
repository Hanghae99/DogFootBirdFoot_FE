import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import { LoginCheck } from "../LoginCheck";

const Header = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  //리덕스 데이터 is_login 으로 로그인여부 체크
  // const is_login = useSelector((state) => state.user.is_login);
  const token = localStorage.getItem("token") ? true : false;
  const nickname = useSelector((state) => state.user.nickname);

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
        dispatch(userActions.logout());
        break;
      default:
        return;
    }
  };

  // 이건 뭐지?
  // React.useEffect(() => {
  //   dispatch(userActions.isLogin());
  // }, []);

  if (token) {
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
            <p>어서오세요, {nickname}님!</p>
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
  align-items: center;
  background-color: blanchedalmond;
  margin: 0 300px;
`;

const HeaderButton = styled.button`
  cursor: pointer;
  color: #fff;
  background-color: #298d49;
  border: 1px solid;
  border-radius: 25px;
  padding: 5px 10px;

  & + & {
    margin-left: 15px;
  }

  &:hover {
    color: tomato;
    font-weight: 600;
  }
`;

// const Btn = styled.div`
//   cursor: pointer;
//   color: #5f5f5f;
// `;

const Div = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 25px;

  p {
    margin: 0;
    padding: 0;
    margin-right: 15px;
  }
`;
