import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: process.env.REACT_APP_REQUEST_TIMEOUT
});

export const useHttp = () => {
  // const bearerToken = user.token
  //   ? "Bearer " + user.token
  //   : "";

  const request = async (configObject) => {
    const { url, method, data } = configObject;

    const options = {
      url: url,
      method: method.toLowerCase(),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        // "Authorization": bearerToken
      },
      data: data
    };

    try {
      const response = await instance(options);

      return response;
    } catch (e) {
      if (e.response.status === 401) {
        // //rip snackbar

        // setTimeout(() => {
        //   setUser({ token: "" });
        //   localStorage.removeItem("ws-chat-user");
        //   navigate("/");
        // }, 1000);
      }
    }
  }

  return request;
}