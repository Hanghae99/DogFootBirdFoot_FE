import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import "./PostWrite.css";
import { addPost } from "../../redux/modules/post";
import { useDispatch } from "react-redux";
import moment from "moment";

const PostWrite = (props) => {
  const [postTitleValue, setPostTitleValue] = React.useState("");
  const [postContentValue, setPostContentValue] = React.useState("");
  const [selete, setSelete] = React.useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    const { value } = e.target; //구조분해할당
    setPostTitleValue(value);
  };

  const onContentChange = (e) => {
    const { value } = e.target; //구조분해할당
    setPostContentValue(value);
  };

  const onClick = (e) => {
    const { value } = e.target; //구조분해할당
    setSelete(value);
  };

  const onAddPost = (e) => {
    e.preventDefault();

    const data = {
      postId: 1,
      category: "JAVA",
      postTitle: postTitleValue,
      postContents: postContentValue,
      nickname: "YeonnJ",
      commentCount: 50,
      likeCount: 500,
      createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };
    dispatch(addPost(data));
    history.push("/");
  };
  console.log(selete);
  return (
    <>
      <Total>
        <InputLay>
          <div class="dropdown">
            <button className="dropbtn">언어 선택</button>

            <div className="dropdown-content">
              <button onClick={onClick} value="JAVA">
                JAVA
              </button>
              <button onClick={onClick} value="JS">
                JS
              </button>
              <button onClick={onClick} value="PYTHON">
                PYTHON
              </button>
              <button onClick={onClick} value="NODE.JS">
                NODE.JS
              </button>
              <button onClick={onClick} value="SPRING">
                SPRING
              </button>
            </div>
            <h1 className="language">{selete}</h1>
          </div>

          <form onSubmit={onAddPost}>
            <Input
              type="text"
              placeholder="제목을 입력해주세요"
              onChange={onTitleChange}
            />
            <InputContents
              textarea
              cols="30"
              rows="30"
              type="text"
              placeholder="내용을 입력해주세요"
              onChange={onContentChange}
            />
            <InputFile type="file" />

            <Button>게시하기</Button>
          </form>
        </InputLay>
      </Total>
    </>
  );
};

export default PostWrite;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 0 820px; */
  border-style: none;
  color: #5f5f5f;
  font-weight: 500;
  font-size: medium;
  cursor: pointer;
  background-color: wheat;
  width: 100px;
  padding: 20px;
  margin-left: 500px;
  margin-top: 20px;
`;

const Input = styled.input`
  display: block;
  justify-content: center;
  align-items: center;
  border-style: none;
  width: 1030px;
  padding: 20px;
  font-size: large;
  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.1);
`;

const InputFile = styled.input`
  display: block;
  justify-content: center;
  align-items: center;
  border-style: none;
  width: 1030px;
  padding: 20px;
`;

const InputContents = styled.textarea`
  display: block;
  justify-content: center;
  align-items: center;
  border-style: none;
  width: 1030px;
  padding: 20px;
  font-size: medium;
  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
`;

const InputLay = styled.div`
  width: 800px;
  padding: 20px;
`;

const Total = styled.div`
  display: flex;
  margin: 0 330px;
`;
