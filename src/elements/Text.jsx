import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { children, bold, color, size, margin, padding } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
    padding,
  };
  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  padding: false,
};

const P = styled.p`
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  ${(props) => (props.margin ? `margin:${props.margin}` : "margin:0px")};
  padding: ${(props) => (props.padding ? `${props.padding};` : "19px 19px;")};
`;

export default Text;
