import { useState } from "react";
import RenderData from "./renderData";
import GetData from "./fetchData";
import "./App.css";
function App() {
  const [data, setData] = useState([]);
  const API_USER_URL = "https://jsonplaceholder.typicode.com/users";
  const API_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
  const API_COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
  const [activeButton, setActiveButton] = useState("");
  const handleUsers = async () => {
    const data = await GetData(API_USER_URL);
    // console.log(data[0]);
    // console.log(JSON.parse(data[0]));
    setData(data);
    setActiveButton("users");
  };
  const handlePosts = async () => {
    const data = await GetData(API_POSTS_URL);
    setData(data);
    setActiveButton("posts");
  };
  const handleComments = async () => {
    const data = await GetData(API_COMMENTS_URL);
    setData(data);
    setActiveButton("comments");
  };
  return (
    <>
      <div className="buttonsHeader">
        <button
          style={{
            "background-color": activeButton === "users" ? "black" : "white",
            color: activeButton === "users" ? "white" : "black",
          }}
          onClick={() => handleUsers()}
        >
          USERS
        </button>
        <button
          style={{
            "background-color": activeButton === "posts" ? "black" : "white",
            color: activeButton === "posts" ? "white" : "black",
          }}
          onClick={() => handlePosts()}
        >
          POSTS
        </button>
        <button
          style={{
            "background-color": activeButton === "comments" ? "black" : "white",
            color: activeButton === "comments" ? "white" : "black",
          }}
          onClick={() => handleComments()}
        >
          COMMENTS
        </button>
      </div>
      <div>
        <RenderData data={data} />
      </div>
    </>
  );
}
export default App;
