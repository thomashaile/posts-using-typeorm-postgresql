import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { addNewPost } from "../../../../services/api";
import PostData from "../../../../types/PostData.initerface";
import { useState } from "react";
import { useSavedPosts } from "../../../context/PostContext";

export enum Message {
  success = "Thanks! Message sent sucessfully",
  delete = "Post deleted sucessfully",
}
function AddPost() {
  const { posts, setPosts } = useSavedPosts();
  const [text, setText] = useState<string | null>("");
  const formInput = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      phone: "",
      category: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Name must be 20 characters or less")
        .required("Name is required"),
      lastName: Yup.string()
        .max(20, "Last name must be 20 characters or less")
        .required("Last name is required"),
      age: Yup.number()
        .required("Age is required")
        .positive()
        .integer("Age must be nmber"),
      email: Yup.string()
        .email("Invalid email adress")
        .required("email is required"),
      phone: Yup.string().phone().required(),
      category: Yup.string().required("Please selact help type"),
      message: Yup.string()
        .max(500, "Message must be 500 characters or less")
        .required("Please write your message"),
    }),
    onSubmit: (values: PostData) => {
      createNewPost(values);
      formInput.resetForm();
    },
  });

  const createNewPost = async (values: PostData) => {
    const res = await addNewPost(values);
    if (res.statusText === "Created") {
      setText(Message.success);
      posts ? setPosts([...posts, res.data]) : setPosts([res.data]);
    } else {
      throw new Error("Error occured");
    }
    return;
  };

  return (
    <div className="bg-white p-6 rounded shadow-md text-black w-full md:max-w-xl">
      <div className="flex justify-between">
        <h1 className={`mb-6 text-3xl text-center md:text-left`}>Add Post</h1>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </div>
      {text ? <p className="text-green-700 italic">{text}</p> : null}
      <form onSubmit={formInput.handleSubmit}>
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="firstName"
          placeholder="First Name"
          onChange={formInput.handleChange}
          onBlur={formInput.handleBlur}
          value={formInput.values.firstName}
        />
        {formInput.touched.firstName && formInput.errors.firstName ? (
          <p className="text-red-400 italic">{formInput.errors.firstName}</p>
        ) : null}
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="lastName"
          placeholder="Last Name"
          onChange={formInput.handleChange}
          onBlur={formInput.handleBlur}
          value={formInput.values.lastName}
        />
        {formInput.touched.lastName && formInput.errors.lastName ? (
          <p className="text-red-400 italic">{formInput.errors.lastName}</p>
        ) : null}
        <input
          type="number"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="age"
          placeholder="Age"
          onChange={formInput.handleChange}
          onBlur={formInput.handleBlur}
          value={formInput.values.age}
        />
        {formInput.touched.age && formInput.errors.age ? (
          <p className="text-red-400 italic">{formInput.errors.age}</p>
        ) : null}
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="E-mail"
          onChange={formInput.handleChange}
          onBlur={formInput.handleBlur}
          value={formInput.values.email}
        />
        {formInput.touched.email && formInput.errors.email ? (
          <p className="text-red-400 italic">{formInput.errors.email}</p>
        ) : null}
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="phone"
          placeholder="Phone number"
          onChange={formInput.handleChange}
          onBlur={formInput.handleBlur}
          value={formInput.values.phone}
        />
        {formInput.touched.phone && formInput.errors.phone ? (
          <p className="text-red-400 italic">{formInput.errors.phone}</p>
        ) : null}
        <select
          name="category"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          onChange={formInput.handleChange}
          onBlur={formInput.handleBlur}
          value={formInput.values.category}
        >
          <option value="">Select message type</option>
          <option value="Looking for Help">Looking for Help</option>
          <option value="I am willing to Help"> I am willing to Help</option>
        </select>
        {formInput.touched.category && formInput.errors.category ? (
          <p className="text-red-400 italic">{formInput.errors.category}</p>
        ) : null}
        <textarea
          name="message"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          placeholder="Your message please..."
          onChange={formInput.handleChange}
          onBlur={formInput.handleBlur}
          value={formInput.values.message}
        />
        {formInput.touched.message && formInput.errors.message ? (
          <p className="text-red-400 italic">{formInput.errors.message}</p>
        ) : null}
        <button
          type="submit"
          className="inline-block bg-blue-500 text-white rounded shadow py-2 px-5 text-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default AddPost;
