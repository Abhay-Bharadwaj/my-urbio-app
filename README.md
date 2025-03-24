# my-urbio-app
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deploy on Vercel
here is the url:

https://my-urbio-app.vercel.app/

// you can navigate to https://my-urbio-app.vercel.app/new for posting a new Blog.

// but due to limitation of jsonplaceholder mock api, it returns only 100 blogs in the dashboard.

// I have implemented following functionalities:

1. Material-UI (MUI):
- Use Material-UI components for the UI (e.g., cards, buttons, grids, typography).
- Implement a responsive layout that works on both desktop and mobile devices.
- Use MUI's theming system to customize the app's appearance (e.g., primary and
secondary colors).

2. TypeScript:
- Define TypeScript interfaces for the blog post data structure.
- Ensure type safety across the application (e.g., props, API responses, state).
  
3. RTK Query:
- Use RTK Query to manage API calls for fetching and creating blog posts.
- Implement caching and automatic refetching for the blog post list.
- Handle loading and error states gracefully.
  
4. Functionality:
• Blog Post List Page:
  - Fetch and display a list of blog posts from a mock API.
- Each post should display the title, author, and a short excerpt.
- Add a "Read More" button that navigates to the individual post page.
• Blog Post Detail Page:
  - Display the full content of the blog post (title, author, body).
• Add New Post:
  - Include a form to add a new blog post (title, author, body).
  - Use RTK Query to submit the new post to the mock API and update the list.
 
5. implemented pagination or infinite scrolling for the blog post list
