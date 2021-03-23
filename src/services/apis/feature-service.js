import http from "./settings/http-common";

const getFeaturesBySolutionId = (solutionId) => {
    return http.get(`/features/solution/${solutionId}`)
}

export default {
    getFeaturesBySolutionId
}