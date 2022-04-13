import React from "react";
import styled from "styled-components";
import PostList from "../components/Main/postList";
import { ActionCreators } from "../redux/modules/post";

import { useHistory } from "react-router";
import { Text, Input, Button } from "../elements/index";

const MainPage = (props) => {
  const history = useHistory();
  const [searchWord, setSearchWord] = React.useState("");
  const [category, setCategory] = React.useState("");

  //카테고리 클릭한 값 가져오기
  // 잘 안되고 있다.
  const onclick = (e) => {
    const { value } = e.target; //구조분해할당
    setCategory(value);
    console.log(value);
    console.log(category);
  };

  // 검색하기
  const search = (e) => {
    e.preventDefault();

    const searchData = {
      category: category,
      searchWord: searchWord,
    };
  };

  return (
    <>
      <Title>
        <Text size="36px" bold margin="10px">
          메인페이지
        </Text>
      </Title>
      <Tap>
        <Search>
          <Input
            padding="10px"
            margin="10px"
            width="40%"
            placeholder="검색어를 입력하세요"
          ></Input>
          <Button
            width="40px"
            height="35px"
            size="10px"
            padding="5px"
            margin="5px"
          >
            검색
          </Button>
        </Search>
        <Category>
          <Button
            width="auto"
            margin="10px"
            padding="10px"
            bg="#FFC000"
            color="white"
            _onClick={onclick}
          >
            #JAVA
          </Button>
          <Button
            width="auto"
            margin="10px"
            padding="10px"
            bg="#F7DF1E"
            color="white"
            _onClick={onclick}
          >
            #JS
          </Button>
          <Button
            width="auto"
            margin="10px"
            padding="10px"
            bg="#3772A3"
            color="white"
            _onClick={onclick}
          >
            #PYTHON
          </Button>
          <Button
            width="auto"
            margin="10px"
            padding="10px"
            bg="#6DB33F"
            color="white"
            _onClick={onclick}
          >
            #SPRING
          </Button>
          <Button
            width="auto"
            margin="10px"
            padding="10px"
            bg="#83CD29"
            color="white"
            _onClick={onclick}
          >
            #NODE.js
          </Button>
        </Category>
      </Tap>

      <Wrap>
        <PostList />
        <Button
          is_float
          text="+"
          _onClick={() => {
            history.push("/postwrite");
          }}
        ></Button>
      </Wrap>
    </>
  );
};

const Title = styled.div`
  display: flex;
  justify-content: center;
`;
const Tap = styled.ul`
  margin: 0 300px;
  padding: 20px 0px;
`;

const Wrap = styled.div`
  margin: 0 310px;
  flex-direction: column;
  padding: 90px 0px 120px 0px;
  // box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
  //   rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MainPage;
