import React from "react";
import styled from "styled-components";

const Header = (props) => {
  //Header분기

  //로그인 하기 전
  return (
    <>
      <Wrapper>
        <Logo>개발세발🐶</Logo>

        <Div>
          <LogBtn>로그인</LogBtn>
          <Btn>회원가입</Btn>
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
  font-size: larger;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: blanchedalmond;
  margin: 0 300px;
`;

const LogBtn = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const Btn = styled.div`
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  justify-content: right;
  margin: 25px;
`;
