import React from "react";
import styled from "styled-components";

import { Text } from "./index";

const Input = (props) => {
  const {
    label,
    placeholder,
    type,
    width,
    height,
    margin,
    padding,
    _onChange,
  } = props;

  // 작성 문법이 잘 이해가 안간다.
  // 왜 props.width 라고 적지 않는거지? 이건 공부해서 블로그에 적어두자
  const styles = {
    width: width,
    height: height,
    margin: margin,
    padding: padding,
  };

  return (
    <React.Fragment>
      {label && <Text margin="5px">{label}</Text>}
      <ElInput
        {...styles}
        type={type}
        placeholder={placeholder}
        onChange={_onChange}
      ></ElInput>
    </React.Fragment>
  );
};

Input.defaultProps = {
  label: false,
  placeholder: "텍스트를 입력하시오.",
  type: "text",
  value: "",
  width: "90%",
  margin: false,
  padding: false,
  _onChange: () => {},
};

const ElInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  width: ${(props) => props.width};

  padding: ${(props) => (props.padding ? `${props.padding};` : "19px 19px;")};
  ${(props) => (props.margin ? `margin:${props.margin};` : "")}
  &::placeholder {
    color: #bbb;
  }
  &:focus {
    border: 1px solid #333333;
  }
`;

export default Input;
