import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getpostAPI } from "../../redux/modules/post";
import { Image, Button, Grid } from "../../elements/index";
import { useHistory } from "react-router-dom";

const PostList = (props) => {
  React.useEffect(() => {
    dispatch(getpostAPI());
  }, []);

  const dispatch = useDispatch();
  const postlist = useSelector((state) => state.post.posts);
  const user_info = useSelector((state) => state.user);
  const preview = useSelector((state) => state.user.preview);

  const history = useHistory();

  console.log("포스트리스트", postlist);
  console.log("유저정보", user_info);
  // const { history } = props;

  return (
    <>
      {postlist.map((item) => {
        console.log(item);
        console.log(item.postId);

        // 로그인 했고, 로그인한 사람과 작성자가 같은 경우
        if (item.nickname === user_info?.nickname) {
          return (
            <Grid
              margin="20px 0px"
              key={item.postId}
              _onClick={() =>
                history.push(`/post/detail/${item.postId}`, {
                  state: item.postId,
                })
              }
            >
              <ImageBox>
                <Image
                  src={
                    preview
                      ? preview
                      : "https://www.newsworks.co.kr/news/photo/202002/433057_327801_345.jpg"
                  }
                >
                  {/* <h2>{item.category}</h2> */}
                </Image>
              </ImageBox>
              <div>
                <Button>수정</Button>
                {/* <Button>상세페이지 이동하기</Button> */}
              </div>
              <div>
                <Question>{item.postTitle}</Question>
                <Comment>
                  <div>
                    <i className="fa-solid fa-comment-dots"></i>{" "}
                    {item.commentCount}개
                  </div>
                  <LikeComment>
                    <i className="fa-solid fa-heart"></i> {item.likeCount}개
                  </LikeComment>
                </Comment>
              </div>
            </Grid>
          );
        }
        // 로그인 안한 경우 또는 로그인했는데 내 글 아닌 경우
        else {
          return (
            <Grid
              margin="20px 0px"
              key={item.postId}
              _onClick={() =>
                history.push(`/post/detail/${item.postId}`, {
                  state: item.postId,
                })
              }
            >
              <ImageBox>
                <Image
                  src={
                    preview
                      ? preview
                      : "https://www.newsworks.co.kr/news/photo/202002/433057_327801_345.jpg"
                  }
                >
                  {/* <h2>{item.category}</h2> */}
                </Image>
              </ImageBox>
              <ContentBox>
                {/* <Button
                  width="100px"
                  _onClick={() => history.push(`/post/${item.postId}`)}
                >
                  글 보기
                </Button> */}
                <div>
                  <Question>{item.postTitle}</Question>
                  <Comment>
                    <div>
                      <i className="fa-solid fa-comment-dots"></i>{" "}
                      {item.commentCount}개
                    </div>
                    <LikeComment>
                      <i className="fa-solid fa-heart"></i> {item.likeCount}개
                    </LikeComment>
                  </Comment>
                </div>
              </ContentBox>
            </Grid>
          );
        }
      })}
    </>
  );
};

export default PostList;

const Box = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  box-shadow: 1px 4px 4px 4px rgba(0, 0, 0, 0.15);
  margin: 30px 20px;
  padding: 10px;
`;

const ImageBox = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 70%;
  overflow: hidden;
  margin: 10px;
`;

const ContentBox = styled.div`
  display: inline-block;
  width: 380px;
  height: 200px;
  overflow: hidden;
  margin: 10px;
`;

const Comment = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 0 0 10px 0;
`;

const Question = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 60px;
`;

const LikeComment = styled.div`
  margin-left: 20px;
  color: #f25430;
`;
