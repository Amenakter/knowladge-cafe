import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

export default function BookMarks({ addBookMarks, readTime }) {
  return (
    <div className="md:w-1/3 bg-slate-200 ml-4 p-5 rounded-md">
      <div>
        <h1 className="text-lg text-purple-950 font-bold bg-purple-50 border border-purple-500 rounded-md p-3 mb-3">
          Spent time on read : {readTime}
        </h1>
      </div>

      <h1 className="text-lg text-purple-950 font-bold bg-purple-50 border border-purple-500 rounded-md p-3">
        Bookmarked Blogs : {addBookMarks.length}
      </h1>
      <div className="">
        {addBookMarks.map((bookMark, idx) => (
          <BookMark bookMark={bookMark} key={idx}></BookMark>
        ))}
      </div>
    </div>
  );
}
BookMarks.propTypes = {
  addBookMarks: PropTypes.array,
  readTime: PropTypes.number,
};
