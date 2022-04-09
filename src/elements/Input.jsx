import React from "react";
import styled from "styled-components";

import { Text } from "./index";

const Input = (props) => {
  const { label, placeholder, type, width, margin, padding } = props;

  const styles = {
    width: width,
    margin: margin,
    padding: padding,
  };

  return (
    <React.Fragment>
      {label && <Text margin="0px">{label}</Text>}
      <ElInput {...styles} type={type} placeholder={placeholder}></ElInput>
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
    color: #cacaca;
  }
  &:focus {
    border: 1px solid #333333;
  }
`;

export default Input;
