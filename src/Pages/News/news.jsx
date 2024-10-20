import React from "react";
import { Stack, Container, Box, Grid2, Typography } from "@mui/material";
import { HomeComment } from "../../components/Home-comment";
import { CommentData } from "../../Data/Comment-data";
import NewsBg from "../../assets/img/NewsBg.png";
import { RecentNews } from "../../components/Recent-News";
export const News = () => {
  return (
    <>
      <Box
        py={"184px"}
        mb={"120px"}
        sx={{
          backgroundImage: `url(${NewsBg})`,
        }}
      >
        <Typography textAlign={"center"} variant="h1">
          Recent News
        </Typography>
      </Box>
      <Box mb={"185px"}>
        <Container>
          <Grid2 container rowGap={"115px"} spacing={"46px"}>
            {CommentData.map((item) => (
              <Grid2 size={6} key={item.id}>
                <RecentNews
                  img={item.img}
                  text={item.text}
                  title={item.title}
                  badge={item.badge}
                  commentor={item.commentor}
                />
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
    </>
  );
};
