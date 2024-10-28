import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

export default function Blogs({ handleAddBookMarks, handleReadingTime }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      {blogs.map((blog) => (
        <Blog
          blog={blog}
          key={blog.id}
          handleAddBookMarks={handleAddBookMarks}
          handleReadingTime={handleReadingTime}
        ></Blog>
      ))}
    </div>
  );
}
Blogs.propTypes = {
  handleAddBookMarks: PropTypes.func,
  handleReadingTime: PropTypes.func,
};
