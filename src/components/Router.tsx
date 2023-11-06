import { useState } from "react";

import { Route, Routes, Navigate, Link } from "react-router-dom";
import Home from "pages/home";
import PostList from "pages/posts";
import PostPage from "pages/posts/detail";
import PostNew from "pages/posts/new";
import PostEdit from "pages/posts/edit";
import Profile from "pages/profile";
import LoginPage from "pages/login";
import SignUpPage from "pages/signup";

interface RouterProps {
  isAuthenticated: boolean;
}

export default function Router({isAuthenticated} : RouterProps) {

  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="/posts/new" element={<PostNew />} />
            <Route path="/posts/edit/:id" element={<PostEdit />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) :
          (
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="*" element={<LoginPage />} />
            </>
          )
        }
      </Routes>
    </>
  )
};

// export default App;