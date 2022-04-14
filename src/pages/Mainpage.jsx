import React from "react";
import styled from "styled-components";
import PostList from "../components/Main/postList";
import { ActionCreators } from "../redux/modules/post";

import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Text, Input, Button } from "../elements/index";
import { Permit } from "../shared/Permit";
import { getCategoryAPI, searchAPI, getpostAPI } from "../redux/modules/post";

const MainPage = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [searchWord, setSearchWord] = React.useState("");
  const [category, setCategory] = React.useState("JAVA");

  console.log(category);
  console.log(typeof category);
  console.log(searchWord);
  console.log(typeof searchWord);

  //카테고리 클릭한 값 가져오기
  const onCategoryChange = (e) => {
    const { value } = e.target; //구조분해할당
    setCategory(value);

    dispatch(getCategoryAPI(category));
  };

  const searchWordChange = (e) => {
    const { value } = e.target;
    setSearchWord(value);
  };

  // 검색하기
  // const search = (e) => {
  //   e.preventDefault();
  //   dispatch(searchAPI(category, searchWord));
  // };

  React.useEffect(() => {
    dispatch(getpostAPI());
  }, []);

  return (
    <>
      <Tap>
        <Category>
          <Button
            size="35px"
            width="12%"
            margin="10px"
            padding="10px"
            bg="#FFC000"
            color="white"
            _value="JAVA"
            _onClick={onCategoryChange}
          >
            #JAVA
          </Button>
          <Button
            size="35px"
            width="12%"
            margin="10px"
            padding="10px"
            bg="#F7DF1E"
            color="white"
            _value="JS"
            _onClick={onCategoryChange}
          >
            #JS
          </Button>
          <Button
            size="35px"
            width="15%"
            margin="10px"
            padding="10px"
            bg="#3772A3"
            color="white"
            _value="PYTHON"
            _onClick={onCategoryChange}
          >
            #PYTHON
          </Button>
          <Button
            size="35px"
            width="15%"
            margin="10px"
            padding="10px"
            bg="#6DB33F"
            color="white"
            _value="SPRING"
            _onClick={onCategoryChange}
          >
            #SPRING
          </Button>
          <Button
            size="35px"
            width="15%"
            margin="10px"
            padding="10px"
            bg="#83CD29"
            color="white"
            _value="NODE.js"
            _onClick={onCategoryChange}
          >
            #NODE.js
          </Button>
        </Category>
      </Tap>

      <Wrap>
        <PostList />
        <Permit>
          <Button
            is_float
            text="+"
            _onClick={() => {
              history.push("/post/write");
            }}
          ></Button>
        </Permit>
      </Wrap>
    </>
  );
};

const Tap = styled.ul`
  margin: 0 300px;
  padding: 20px 0px;
`;

const Wrap = styled.div`
  margin: 0 310px;
  flex-direction: column;
  padding: 90px 0px 120px 0px;
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MainPage;
