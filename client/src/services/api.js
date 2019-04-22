export const request = (url, method = "GET") => {
  const options = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  return fetch(url, options).then(response => response.json());
};
