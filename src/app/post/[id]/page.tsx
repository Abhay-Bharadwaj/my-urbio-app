"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useGetPostByIdQuery } from "../../../services/postsApi";
import { Container, Typography } from "@mui/material";

const PostDetailPage: React.FC = () => {
  const { id } = useParams();
  const { data: post, error, isLoading } = useGetPostByIdQuery(Number(id));

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error loading post</Typography>;
  if (!post) return <Typography>Post not found</Typography>;

  return (
    <Container>
      <Typography variant="h4">{post.title}</Typography>
      <Typography variant="subtitle1">By Author {post.userId}</Typography>
      <Typography variant="body1">{post.body}</Typography>
    </Container>
  );
};

export default PostDetailPage;
