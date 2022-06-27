import React, { useState } from "react";
import MainHeader from "./MainHeader";
import AllPosts from "./posts/AllPosts";

type Props = {
  loading: boolean;
};

const Home = ({ loading }: Props) => {
  return (
    <div className="content">
      <MainHeader />
      <AllPosts loading={loading} />
    </div>
  );
};

export default Home;
