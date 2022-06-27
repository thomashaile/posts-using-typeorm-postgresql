import React, { useState } from "react";
import PostData from "../../../../types/PostData.initerface";
import { deletePost } from "../../../../services/api";
import { useSavedPosts } from "../../../context/PostContext";
import Loading from "../../Loading";
import PostCard from "./PostCard";
import AddPost, { Message } from "./AddPost";

interface Props {
  loading: boolean;
}

const AllPosts = ({ loading }: Props) => {
  const { posts, setPosts } = useSavedPosts();
  const [text, setText] = useState<string | null>("");

  const handleEdit = (id: number) => {
    console.log(id);
  };
  const handleDelete = async (id: number) => {
    const res = await deletePost(id);
    console.log(res);
    if (res.status === "Deleted") {
      setText(Message.delete);
      let newPosts = posts?.filter((post) => post.id !== id);
      console.log(newPosts);
      if (newPosts) {
        setPosts(newPosts);
      }
    } else {
      throw new Error("Error occured");
    }
    return;
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      {loading ? (
        <Loading />
      ) : posts ? (
        <div>
          {text ? <p className="text-yellow-700 italic">{text}</p> : null}
          {posts.map((post: PostData) => {
            return (
              <PostCard
                key={post.id}
                post={post}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-red-500 italic">No posts to show... </p>
      )}
    </div>
  );
};

export default AllPosts;
