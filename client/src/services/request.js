// make a client
// fetch token on first api request
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://satcheltwo-api.abstractpoo.repl.co",
  json: true,
});

class Client {
  async get(user, path) {
    const token = await user.accessToken;

    return axiosClient({
      method: "get",
      url: path,
      headers: {
        authtoken: token,
      },
    });
  }

  async post(user, path, body) {
    const token = await user.accessToken;

    return axiosClient({
      method: "post",
      url: path,
      headers: {
        authtoken: token,
      },
      data: body,
    });
  }
}

export default new Client();
