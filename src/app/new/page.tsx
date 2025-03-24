"use client";
import React, { useState, useEffect } from "react";
import { useCreatePostMutation, useGetPostsQuery } from "../../services/postsApi";
import { Container, TextField, Button, Typography } from "@mui/material";


const AddPostPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [createPost, { isLoading, error }] = useCreatePostMutation();
  const [form, setForm] = useState({ title: "", body: "", author:"", userId: 1 });

  const { refetch } = useGetPostsQuery();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await createPost(form);
    await refetch();
    setForm({ title: "", body: "", author:"", userId: 1 });
  };

  return (
    <Container>
      <Typography variant="h4">Add New Post</Typography>
      <TextField label="Title" name="title" fullWidth onChange={handleChange} value={form.title} margin="normal" />
      <TextField label="Author" name="author" fullWidth onChange={handleChange} value={form.author} margin="normal" />
      <TextField label="Body" name="body" fullWidth multiline rows={4} onChange={handleChange} value={form.body} margin="normal" />
      <Button variant="contained" color="primary" onClick={handleSubmit} disabled={isLoading}>
        Submit
      </Button>
      {error && <Typography color="error">Error submitting post</Typography>}
    </Container>
  );
};

export default AddPostPage;
