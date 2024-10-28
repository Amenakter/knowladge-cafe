import { useState } from "react";
import Archives from "./compoments/Archives/Archives";
import Bolgs from "./compoments/blogs/blogs";
import BookMarks from "./compoments/BookMarks/BookMarks";
import Header from "./compoments/Header/Header";

function App() {
  const [addBookMarks, setAddBookMarks] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [addArchive, setAddArchive] = useState([]);

  function handleAddBookMarks(blog) {
    const BookMarks = [...addBookMarks, blog];
    // console.log(BookMarks);
    setAddBookMarks(BookMarks);
  }
  function handleReadingTime(time, id) {
    const newReadTime = readTime + time;
    // console.log(newReadTime);
    setReadTime(newReadTime);
    // console.log("Arealdy read", blog);
    const markAsRead = addBookMarks.filter((bookMarks) => bookMarks.id !== id);
    setAddBookMarks(markAsRead);
    const readAbleBlog = addBookMarks.filter((readBlog) => readBlog.id == id);
    const finalArchive = [...addArchive, readAbleBlog];
    // console.log(finalArchive);
    setAddArchive(finalArchive);
  }

  return (
    <>
      <Header></Header>
      <div className=" md:w-2/3 m-auto flex justify-between pt-5">
        <Bolgs
          handleAddBookMarks={handleAddBookMarks}
          handleReadingTime={handleReadingTime}
        ></Bolgs>
        <BookMarks addBookMarks={addBookMarks} readTime={readTime}></BookMarks>
      </div>
      <Archives addArchive={addArchive}></Archives>
    </>
  );
}

export default App;
