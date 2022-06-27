import React from "react";
import PostData from "../../../../types/PostData.initerface";

type Props = {
  post: PostData;
  handleEdit: any;
  handleDelete: any;
};

const PostCard = ({ post, handleEdit, handleDelete }: Props) => {
  return (
    <div className="max-w-xl p-2">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            {post.category}
          </h2>
          <p className="text-gray-400 capitalize">
            {post.lastName}, {post.firstName}
          </p>
        </div>
        <p className="text-gray-700">{post.message}</p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleEdit(post.id);
            }}
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Edit
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              handleDelete(post.id);
            }}
            className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
