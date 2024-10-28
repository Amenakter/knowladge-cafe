import PropTypes from "prop-type";
import { FaBookmark } from "react-icons/fa";

export default function Blog({ blog, handleAddBookMarks, handleReadingTime }) {
  const { id, title, author_img, author, date, img, reading_time, tag } = blog;
  return (
    <div className="mb-5 border-b">
      <img className="" src={img} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="h-14 w-14 rounded-full mt-8 object-cover"
            src={author_img}
            alt=""
          />
          <div className="ml-3 mt-7">
            <p className="text-black font-bold">{author}</p>
            <p className="text-gray-800">{date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            className="text-blue-600 ml-2"
            onClick={() => handleAddBookMarks(blog)}
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h1 className="text-3xl mt-6 font-bold">{title}</h1>
      <p className="text-gray-500 my-3 cursor-pointer">#{tag}</p>

      <button
        className="text-purple-600 underline cursor-pointer mb-5"
        onClick={() => handleReadingTime(reading_time, id, blog)}
      >
        Mark as read
      </button>
    </div>
  );
}
Blog.propTypes = {
  blog: PropTypes.object,
  handleAddBookMarks: PropTypes.func,
  handleReadingTime: PropTypes.func,
};
