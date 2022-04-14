import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Image, Grid, Text } from "../../elements/index";
import { useHistory } from "react-router-dom";

const PostList = (props) => {
  const postlist = useSelector((state) => state.post.posts);
  const preview = useSelector((state) => state.user.preview);

  const history = useHistory();

  return (
    <>
      {postlist.map((item) => {
        return (
          <Grid
            is_flex
            margin="20px 0px"
            key={item.postId}
            _onClick={() =>
              history.push(`/post/detail/${item.postId}`, {
                state: item.postId,
              })
            }
            shadow="1px 4px 4px 4px rgba(0, 0, 0, 0.15)"
          >
            <ImageBox>
              <Image
                src={
                  preview
                    ? preview
                    : "https://www.newsworks.co.kr/news/photo/202002/433057_327801_345.jpg"
                }
              ></Image>
            </ImageBox>
            <ContentBox>
              <Text bold size="22px" padding="19px 0 10px 19px">
                {item.category}
              </Text>
              <Grid width="70%" height="30%">
                <Text bold size="22px" padding="5px 19px 10px">
                  {item.postTitle}
                </Text>
                <Text padding="5px 19px">{item.postContents}</Text>
              </Grid>
              <Comment>
                <i className="fa-solid fa-comment-dots"></i> {item.commentCount}
                개
              </Comment>
            </ContentBox>
          </Grid>
        );
      })}
    </>
  );
};

export default PostList;

const ImageBox = styled.div`
  display: inline-block;
  width: 150px;
  height: 150px;
  border-radius: 70%;
  overflow: hidden;
  margin: 10px;
`;

const ContentBox = styled.div`
  display: inline-block;
  width: 70%;
  height: 200px;
  overflow: hidden;
  margin: 10px;
`;

const Comment = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 20px 40px 10px 0;
`;

const LikeComment = styled.div`
  margin-left: 20px;
  color: #f25430;
`;
