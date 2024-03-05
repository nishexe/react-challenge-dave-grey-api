import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import List from "./List";
import Table from "./Table";
function App() {
  const [data, setData] = useState([]);
  const API_URL = "https://jsonplaceholder.typicode.com/";
  // const API_USER_URL = "https://jsonplaceholder.typicode.com/users";
  // const API_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
  // const API_COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
  const [requestType, setRequestType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${requestType}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItems();
  }, [requestType]);

  return (
    <>
      <Form requestType={requestType} setRequestType={setRequestType} />
      {/* <List items={items} /> */}
      <Table items={items}/>
      {/* {console.log("INSIDE APP reqType is", requestType)} */}
    </>
  );
}
export default App;
