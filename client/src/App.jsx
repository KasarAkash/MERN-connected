import axios from "axios";
import { useEffect } from "react";

function App() {
  async function getData() {
    const res = await axios.get("http://localhost:3000/api");
    console.log(res.data.msg);
  }

  async function postData(name) {
    const res = await axios.post("http://localhost:3000/api", { name });
    console.log(res.data.msg);
  }

  useEffect(() => {
    // getData();
    postData("Akash");
  });
  return <div>App</div>;
}

export default App;
