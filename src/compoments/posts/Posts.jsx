import PropTypes from "prop-types";

export default function Posts({ post }) {
  const { img, author_img, author, date, title, tag } = post;
  return (
    <div className="mb-5">
      <img src={img} alt="" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src={author_img}
              alt=""
            />
            <div className="ml-3 ">
              <p className="text-black font-bold text-xs">{author}</p>
              <p className="text-gray-800 text-xs">{date}</p>
            </div>
          </div>
        </div>
        <h1 className="text-xl mt-6 font-bold">{title}</h1>
        <p className="text-gray-500 mt-3 cursor-pointer">#{tag}</p>
      </div>
    </div>
  );
}

Posts.propTypes = {
  post: PropTypes.object,
};
