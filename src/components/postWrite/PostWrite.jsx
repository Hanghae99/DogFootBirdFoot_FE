import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import "./PostWrite.css";
import { addPostAPI } from "../../redux/modules/post";
import { useDispatch } from "react-redux";
import moment from "moment";
import { ImageUploadDB } from "../../redux/modules/image";
import { Grid } from "../../elements/index";

const PostWrite = (props) => {
  const [postTitleValue, setPostTitleValue] = React.useState("");
  const [postContentValue, setPostContentValue] = React.useState("");
  const [select, setSelect] = React.useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const fileInput = React.useRef();

  const selectFile = (e) => {
    const formData = new FormData();
    const fileImage = e.target.files[0];
    formData.append("images", fileImage);
    dispatch(ImageUploadDB(formData));
  };

  const onTitleChange = (e) => {
    const { value } = e.target;
    setPostTitleValue(value);
  };

  const onContentChange = (e) => {
    const { value } = e.target;
    setPostContentValue(value);
  };

  const onClick = (e) => {
    const { value } = e.target;
    setSelect(value);
  };

  const onAddPost = (e) => {
    e.preventDefault();

    const post = {
      category: select,
      postTitle: postTitleValue,
      postContents: postContentValue,
      imageUrl: null,
    };

    dispatch(addPostAPI(select, postTitleValue, postContentValue));
    history.push("/");
  };

  return (
    <>
      <Grid>
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
            <h1 className="language">{select}</h1>
          </div>

          <form
            name="contentform"
            // action="/home/uploadfiles"
            onSubmit={onAddPost}
            encType="multipart/form-data"
            method="post"
          >
            <InputTitle
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
            <InputFile type="file" ref={fileInput} onChange={selectFile} />

            <Button>게시하기</Button>
          </form>
        </InputLay>
      </Grid>
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

const InputLay = styled.div`
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const InputTitle = styled.input`
  display: block;
  justify-content: center;
  align-items: center;
  border-style: none;
  width: 80%;
  padding: 20px;
  font-size: large;
  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.1);
`;

const InputContents = styled.textarea`
  display: block;
  justify-content: center;
  align-items: center;
  border-style: none;
  width: 80%;
  padding: 20px;
  font-size: medium;
  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
`;

const InputFile = styled.input`
  display: block;
  justify-content: center;
  align-items: center;
  border-style: none;
  width: 1030px;
  padding: 20px;
`;
