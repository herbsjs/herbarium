const requireAll = require('../src/requireAll')
const assert = require('assert')

describe('requireAll', () => {

  it('should validate files with default domain folders', () => {

    const reqAll = requireAll()

    assert.equal(reqAll.entities[0], undefined)
    assert.equal(reqAll.repositories[0], undefined)
    assert.equal(reqAll.usecases[0], undefined)

  })


  it('should validate files with custom domain entities folders', () => {

    var options = {
      entitiesPath: '/tests/domain/entities'
    }
    const reqAll = requireAll(options)

    assert.equal(Object.keys(reqAll.entities[0]), 'item.js')

  })



})
