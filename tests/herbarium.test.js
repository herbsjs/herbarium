const { herbarium } = require('../src/herbarium')
const assert = require('assert')

describe('herbarium', () => {

    beforeEach(() => {
        herbarium.reset()
    })

    it('should insert items', () => {
        // Given
        const aHerbarium = herbarium
        const anEntity = { name: 'an entity' }
        const aUsecase = { name: 'a usecase' }
        const aSpec = { name: 'a spec' }
        const aRepository = { name: 'a repository' }
        // When
        aHerbarium.entities.add(anEntity, 'an entity id')
        aHerbarium.usecases.add(aUsecase, 'a usecase id')
        aHerbarium.specs.add(aSpec, 'a spec id')
        aHerbarium.repositories.add(aRepository, 'a repository id')
        // Then
        assert.deepEqual(aHerbarium.entities.all.get('an entity id').entity, anEntity)
        assert.deepEqual(aHerbarium.usecases.all.get('a usecase id').usecase, aUsecase)
        assert.deepEqual(aHerbarium.specs.all.get('a spec id').spec, aSpec)
        assert.deepEqual(aHerbarium.repositories.all.get('a repository id').repository, aRepository)
        assert.equal(aHerbarium.entities.all.size, 1)
        assert.equal(aHerbarium.usecases.all.size, 1)
        assert.equal(aHerbarium.specs.all.size, 1)
        assert.equal(aHerbarium.repositories.all.size, 1)

    })

    it('should reset all the lists', () => {
        // Given
        const aHerbarium = herbarium
        aHerbarium.entities.add({ name: 'an entity' }, 'an entity id')
        aHerbarium.usecases.add({ name: 'a usecase' }, 'a usecase id')
        aHerbarium.specs.add({ name: 'a spec' }, 'a spec id')
        aHerbarium.repositories.add({ name: 'a repository' }, 'a repository id')
        // When
        aHerbarium.reset()
        // Then
        assert.equal(aHerbarium.entities.all.size, 0)
        assert.equal(aHerbarium.usecases.all.size, 0)
        assert.equal(aHerbarium.specs.all.size, 0)
        assert.equal(aHerbarium.repositories.all.size, 0)
    })
})
