import React from "react";
import MainHeader from "./MainHeader";
import PostCard from "./PostCard";

type Props = {};

const Main = (props: Props) => {
  const test = false;

  if (test) throw new Error("Man fail");
  else {
    return (
      <main className="content">
        <MainHeader /> <PostCard /> <PostCard /> <PostCard /> <PostCard />{" "}
        <PostCard />
      </main>
    );
  }
};

export default Main;
