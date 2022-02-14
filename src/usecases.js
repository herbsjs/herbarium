const item = require('./list/item')
const list = require('./list/list')
const usecases = new Map()
const { toPascalCase } = require('./tools')

const builder = (usecase, id) => {
    const usecaseId = id || toPascalCase(usecase.description)

    if (!usecaseId) {
        throw new Error('Herbarium requires an id for this usecase or an usecase with non empty description.')
    }

    const defaultItem = item(usecaseId)
    const usecaseItem = Object.assign({}, defaultItem, {
        usecase,
        operation: undefined,
        entity: undefined,
        group: undefined
    })
    return usecaseItem
}

module.exports = list(usecases, builder)