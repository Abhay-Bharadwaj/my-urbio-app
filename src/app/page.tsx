"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useGetPostsQuery } from "../services/postsApi";
import { CircularProgress, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import BlogCard from "../components/BlogCard";
import Paper from '@mui/material/Paper';

const BlogListPage: React.FC = () => {

    const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#575757',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<any[]>([]); 

  const { data, isFetching } = useGetPostsQuery(page);


  useEffect(() => {
    if (data) {
      setPosts((prevPosts) => [...prevPosts, ...data]);
    }
  }, [data]);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastPostRef = useCallback(
    (node: HTMLElement | null) => {
      if (isFetching) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1); 
        }
      });
      if (node) observer.current.observe(node);
    },
    [isFetching]
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Blog Posts
      </Typography>
      <Grid container spacing={3}>
        {posts?.map((post, index) => (
          <Grid size={{xs: 12, sm:6, md:4}} key={post.id} ref={index === posts.length - 1 ? lastPostRef : null}>
             <Item sx={{ height: "100%" }}><BlogCard post={post} /></Item> 
          </Grid>
        ))}
      </Grid>
      {isFetching && <CircularProgress sx={{ display: "block", margin: "20px auto" }} />}
    </Container>
  );
};

export default BlogListPage;
