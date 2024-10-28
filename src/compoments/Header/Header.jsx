import profileImg from "../../assets/images/profile.png";

export default function Header() {
  return (
    <div className="md:w-2/3 m-auto flex justify-between items-center border-b-2 border-gray-300 p-3">
      <h1 className="text-3xl font-bold text-blue-800">Knowledge Cafe </h1>
      <img className="h-10 cursor-pointer" src={profileImg} alt="" />
    </div>
  );
}
