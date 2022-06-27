import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LeftSideBar from "./components/pages/sidebar/LeftSideBar";
import Nav from "./components/pages/Nav";
import Home from "./components/pages/main/Home";
import GetPost from "./components/pages/main/posts/GetPost";
import AddPost from "./components/pages/main/posts/AddPost";
import ErrorPage from "./components/pages/error/ErrorPage";
import { PostContext } from "./components/context/PostContext";
import { getAllPosts } from "./services/api";
import PostData from "./types/PostData.initerface";

function App() {
  const [posts, setPosts] = useState<PostData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const res = await getAllPosts();
      setPosts(res.data);
      setLoading(false);
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
      }}
    >
      <div className="App">
        <Router>
          <Nav />
          <LeftSideBar />
          <Routes>
            <Route path="/" element={<Home loading={loading} />} />
            <Route path="/Post/New" element={<AddPost />} />
            <Route path="/Question/New" element={<h4>Coming Soon...!</h4>} />
            <Route path="/Post/:postId" element={<GetPost />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    </PostContext.Provider>
  );
}
export default App;
