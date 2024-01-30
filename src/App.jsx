import { useState } from "react";
import RenderData from "./renderData";
import GetData from "./fetchData";
import "./App.css";
function App() {
  const [data, setData] = useState([]);
  const API_USER_URL = "https://jsonplaceholder.typicode.com/users";
  const API_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
  const API_COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

  const handleUsers = async () => {
    const data = await GetData(API_USER_URL);
    // console.log(data[0]);
    // console.log(JSON.parse(data[0]));
    setData(data);
  };
  const handlePosts = async () => {
    const data = await GetData(API_POSTS_URL);
    setData(data);
  };
  const handleComments = async () => {
    const data = await GetData(API_COMMENTS_URL);
    setData(data);
  };
  return (
    <>
      <div className="buttonsHeader">
        <button onClick={() => handleUsers()}>USERS</button>
        <button onClick={() => handlePosts()}>POSTS</button>
        <button onClick={() => handleComments()}>COMMENTS</button>
      </div>
      <div>
        <RenderData data={data} />
      </div>
    </>
  );
}
export default App;
