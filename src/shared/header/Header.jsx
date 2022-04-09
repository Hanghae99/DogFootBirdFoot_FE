import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Header = (props) => {
  const history = useHistory();
  //Header분기

  //로그인 하기 전
  return (
    <>
      <Wrapper>
        <Logo>개발세발🐶</Logo>

        <Div>
          <LogBtn>어서오세요, Dev.yeonnJ님!</LogBtn>
          <LogBtn
            onClick={() => {
              history.push("/login");
            }}
          >
            로그인
          </LogBtn>
          <Btn
            onClick={() => {
              history.push("/signup");
            }}
          >
            회원가입
          </Btn>
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
//           <LogBtn>로그아웃</LogBtn>
//           <Btn>마이페이지</Btn>
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

const LogBtn = styled.div`
  margin-right: 15px;
  cursor: pointer;
  color: #5f5f5f;
`;

const Btn = styled.div`
  cursor: pointer;
  color: #5f5f5f;
`;

const Div = styled.div`
  display: flex;
  justify-content: right;
  margin: 25px;
`;
