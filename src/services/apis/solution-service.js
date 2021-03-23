import http from "./settings/http-common";

const getAllSolutions = () => {
    return http.get(`/solutions`)
}

export default {
    getAllSolutions
}