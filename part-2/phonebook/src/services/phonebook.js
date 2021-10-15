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

const deleteNumber = (deletedId) => {
    const request = axios.delete(`${baseUrl}/${deletedId}`);
    return request.then((r) => r);
};

export default { getAllNumbers, addNumber, deleteNumber };
