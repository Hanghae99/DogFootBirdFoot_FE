import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { placeholder, type, width, margin, padding } = props;

  const styles = {
    width: width,
    margin: margin,
    padding: padding,
  };

  return (
    <React.Fragment>
      <ElInput {...styles} type={type} placeholder={placeholder}></ElInput>
    </React.Fragment>
  );
};

Input.defaultProps = {
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
    font-weight: 500;
  }
  &:focus {
    border: 1px solid #333333;
  }
`;

export default Input;
