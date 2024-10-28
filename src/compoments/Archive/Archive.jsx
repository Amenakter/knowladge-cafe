import PropTypes from "prop-types";
import Posts from "../posts/Posts";

export default function Archive({ archive }) {
  return (
    <div className="mb-5 border border-gray-300">
      {archive.map((post, idx) => (
        <Posts post={post} key={idx}></Posts>
      ))}
    </div>
  );
}

Archive.propTypes = {
  archive: PropTypes.object,
};
