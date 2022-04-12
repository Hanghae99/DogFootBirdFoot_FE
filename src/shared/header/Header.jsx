import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Header = (props) => {
  const history = useHistory();
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
      default:
        return;
    }
  };
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
          <p>어서오세요, Dev.yeonnJ님!</p>
          <HeaderButton name="login" onClick={onClick}>
            Login
          </HeaderButton>
          <HeaderButton name="signup" onClick={onClick}>
            SignUp
          </HeaderButton>
        </Div>
      </Wrapper>
    </>
  );
};

//로그인 후
//   return (
//     <>
//       <Wrapper>
//         <Logo>개발세발🐶</Logo>

//         <Div>
//           <HeaderButton>Logout</HeaderButton>
//           <HeaderButton>Mypage</HeaderButton>
//         </Div>
//       </Wrapper>
//     </>
//   );
// };

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
