import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    width,
    height,
    margin,
    padding,
    bg,
    children,
    center,
    _onClick,
    shadow,
  } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    height,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
    shadow,
  };
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  width: "100%",
  height: "100%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  _onClick: () => {},
  shadow: false,
};

const GridBox = styled.div`
  display: ${(props) => props.display};
  min-width: 300px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  box-shadow: ${(props) => (props.shadow ? `${props.shadow};` : "")}
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
    ${(props) => (props.is_flex ? `display: flex; align-items: center; ` : "")}
    ${(props) => (props.center ? `text-align: center;` : "")};
`;

export default Grid;
