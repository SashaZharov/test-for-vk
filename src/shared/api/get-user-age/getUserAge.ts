import { USER_AGE_URL } from "../../constants";

export const getUserAge = (name: string, signal: AbortSignal) => {
  const url = `${USER_AGE_URL}?name=${name}`;

  return fetch(url, { signal })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.age);
      return data.age;
    })
    .catch((error) => {
      if (error.name === "AbortError") {
        console.log("Request was aborted:", error);
      } else {
        console.error("Error fetching data:", error);
      }
      return;
    });
};
