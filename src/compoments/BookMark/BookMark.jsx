import PropTypes from "prop-types";

export default function BookMark({ bookMark }) {
  const { title } = bookMark;

  return (
    <div className="bg-slate-50 mt-3 border border-gray-300 rounded-md">
      <h1 className="text-base font-semibold p-3">{title}</h1>
    </div>
  );
}
BookMark.propTypes = {
  bookMark: PropTypes.object,
};
