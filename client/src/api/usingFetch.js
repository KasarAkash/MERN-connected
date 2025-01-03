export async function getData() {
  const res = await fetch("/api");
  const data = res.json();
  data.then((data) => console.log(data));
}

export async function postData(name) {
  const res = await fetch("/api", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  const data = res.json();
  data.then((data) => console.log(data));
}
