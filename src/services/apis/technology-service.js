import http from "./settings/http-common";

const getTechnologiesBySolutionId = (solutionsId) => {
    return http.get(`/technologies/solution/${solutionsId}`)
}

const getTechnologiesByTechnologyTypeId = (technologyTypeId) => {
    return http.get(`/technologies/technologytype/${technologyTypeId}`)
}

const getTechnologiesByPortfolioId = (portfolioId) => {
    return http.get(`/portfoliotechnologies/portfolio/${portfolioId}`)
}

export default {
    getTechnologiesBySolutionId,
    getTechnologiesByTechnologyTypeId,
    getTechnologiesByPortfolioId
}