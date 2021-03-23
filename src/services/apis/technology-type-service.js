import http from "./settings/http-common";

const getAllTechnologyTypes = () => {
    return http.get(`/technologytypes`)
}

export default {
    getAllTechnologyTypes
}