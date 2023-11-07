import axios from "axios";

const GetByAxios = (url) => {
  axios
    .get(url)
    .then((res) => res.data)
    .error((error) => error);
};

export default GetByAxios;
