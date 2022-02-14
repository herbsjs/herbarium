const item = require('./list/item')
const list = require('./list/list')
const entities = new Map()
const { toPascalCase } = require('./tools')

const builder = (entity, id) => {
    const entityId = id || toPascalCase(entity.name)

    if (!entityId) {
        throw new Error('Herbarium requires an id for this entity or an entity with a non empty name.')
    }

    const defaultItem = item(entityId)
    const entityItem = Object.assign({}, defaultItem, { entity })
    return entityItem
}

module.exports = list(entities, builder)