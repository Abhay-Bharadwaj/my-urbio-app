import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BlogPost } from "../types/types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<BlogPost[], number| void>({
    query: (page = 1) => `/posts?_page=${page}&_limit=10`,
      providesTags: ["Posts"],
    }),
    getPostById: builder.query<BlogPost, number>({
      query: (id) => `/posts/${id}`,
    }),
    createPost: builder.mutation<BlogPost, Partial<BlogPost>>({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useCreatePostMutation } = postsApi;
