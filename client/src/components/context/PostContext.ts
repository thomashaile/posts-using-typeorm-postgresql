import * as React from "react";
import PostData from "../../types/PostData.initerface";

//Post context interface
export interface PostContextProps {
  posts: PostData[] | null;
  setPosts: (savedPostLists: PostData[]) => void;
}

//Default inital values
export const defaultContext: PostContextProps = {
  posts: null,
  setPosts: () => {},
};

export const PostContext =
  React.createContext<PostContextProps>(defaultContext);

//Custom hook - for consumers
export const useSavedPosts = () => React.useContext(PostContext);
