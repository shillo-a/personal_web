const convertFromRawTechnology = (startData) => {
    if(startData.length>0){

        //выдеркиваем все technology types
        var technologyTypes = startData.map(technology => {
            return technology.technologyType
        })

        //оставляем уникальные technology types
        const uniq = new Set(technologyTypes.map(e => JSON.stringify(e)));
        const resUniq = Array.from(uniq).map(e => JSON.parse(e));
        ////

        //получаем итоговое значение
        var resultData = resUniq.map(technologyType => {
            var technologies = startData.filter(technology => technology.technologyType.id === technologyType.id)
            return {...technologyType, technologies: technologies}
        })
        // console.log(resultData)
        return resultData

    }   
}

const convertFromRawTechnology2 = (startData) => {
    if(startData.length>0){

        // выдеркиваем все technology types
        var technologyTypes = startData.map(portfolio => {
            return portfolio.technology.technologyType
        })

        //оставляем уникальные technology types
        const uniq = new Set(technologyTypes.map(e => JSON.stringify(e)));
        const resUniq = Array.from(uniq).map(e => JSON.parse(e));
        ////

        //получаем итоговое значение
        var resultData = resUniq.map(technologyType => {
            var technologies = startData.filter(portfolio => portfolio.technology.technologyType.id === technologyType.id)

            var technologiesOnly = technologies.map(technology => {
                return technology.technology
            })

            return {...technologyType, technologies: technologiesOnly}
        })
        // console.log(resultData)
        return resultData
        
    }
}

export default {
    convertFromRawTechnology,
    convertFromRawTechnology2
};