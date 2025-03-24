import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import Link from "next/link";
import { BlogPost } from "../types/types";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", backgroundColor: "#D3D3D3" }}> 
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2">By Author {post.userId}</Typography>
        <Typography variant="body2" noWrap>
          {post.body}
        </Typography>
        <Link href={`/post/${post.id}`} passHref>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Read More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
