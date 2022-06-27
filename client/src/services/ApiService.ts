import axios from "axios";

export const getPost = (url: string) => {
  return axios
    .get(url)
    .then((res) => {
      const result = handleResponse(res);
      return Promise.resolve(result);
    })
    .catch((err) => {
      return Promise.reject(handleError(err));
    });
};

export const createPost = (url: string, newData: any) => {
  return axios
    .post(url, newData)
    .then((res) => {
      const result = handleResponse(res);
      console.log("from ha", result);
      return Promise.resolve(result);
    })
    .catch((err) => {
      return Promise.reject(handleError(err));
    });
};

export const removePost = (url: string) => {
  return axios
    .delete(url)
    .then((res) => {
      const result = handleResponse(res);
      return Promise.resolve(result);
    })
    .catch((err) => {
      return Promise.reject(handleError(err));
    });
};

const handleError = (err: any) => {
  console.error("API call failed. " + err);
  throw err;
};

const handleResponse = (response: any) => {
  console.log(response.data.statusText);
  if (
    response.status === 200 ||
    response.status === 201 ||
    response.data.statusText === "OK" ||
    response.data.statusText === "Created" ||
    response.data.statusText === "Updated" ||
    response.data.statusText === "Deleted"
  )
    return response.data;
  if (response.status === 400) {
    const error = response.data.error || "Failed";
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
};
