import axios from "axios";

export async function getData() {
  const res = await axios.get("/api");
  console.log(res.data);
}

export async function postData(name) {
  const res = await axios.post("/api", { name });
  console.log(res.data);
}
