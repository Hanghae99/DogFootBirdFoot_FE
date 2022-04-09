import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { width, margin, padding, color, bg, children } = props;

  const styles = {
    width: width,
    margin: margin,
    padding: padding,
    color: color,
    bg: bg,
  };

  return (
    <React.Fragment>
      <BasicButton {...styles}>{children}</BasicButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  width: "90%",
  margin: false,
  padding: "15px 15px",
  color: "#fff",
  bg: "#298D49",
  children: null,
};

const BasicButton = styled.button`
  width: ${(props) => props.width};
  ${(props) => (props.margin ? `margin:${props.margin};` : "")}
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
`;

export default Button;
