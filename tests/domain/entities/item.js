const { herbarium } = require('../../../src/herbarium')
const { entity, field, id } = require('@herbsjs/herbs')

const Item =
  entity('Item', {
    id: id(Number),
    description: field(String, {
      validation: { presence: true, length: { minimum: 3 } }
    }),
    isDone: field(Boolean, {
      default: false
    }),
    position: field(Number, { presence: true })
  })

module.exports.Item = Item
