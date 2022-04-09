import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { shape, src, size, half } = props;

  const styles = {
    src: src,
    size: size,
    half: half,
  };

  return <ImageCircle {...styles}></ImageCircle>;
};

Image.defaultProps = {
  shape: "circle",
  src: "https://www.newsworks.co.kr/news/photo/202002/433057_327801_345.jpg",
  size: 200,
  half: false,
};

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;

export default Image;
