import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAllNumbers = () => {
    const request = axios.get(baseUrl);
    return request.then((resp) => resp.data);
};

const addNumber = (newObject) => {
    const request = axios.post(baseUrl, newObject);
    return request.then((resp) => resp.data);
};

export default { getAllNumbers, addNumber };
