import http from "./settings/http-common";

// 
const getAllPortfolios = () => {
    return http.get(`/solutionportfolios`) // есть /portfolios, но без solutions
}



export default {
    getAllPortfolios
}