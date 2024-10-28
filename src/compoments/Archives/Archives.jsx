import PropTypes from "prop-types";
import Archive from "../Archive/Archive";

export default function Archives({ addArchive }) {
  return (
    <div className="md:w-2/3 m-auto">
      <h1 className="text-3xl text-purple-800">
        Recently you read this article: {addArchive.length}
      </h1>
      <div className="grid grid-cols-3 gap-4 mt-12">
        {addArchive.map((archive, idx) => (
          <Archive archive={archive} key={idx}></Archive>
        ))}
      </div>
    </div>
  );
}
Archives.propTypes = {
  addArchive: PropTypes.object,
};
