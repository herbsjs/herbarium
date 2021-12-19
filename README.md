![Node.js CI](https://github.com/herbsjs/herbarium/workflows/Node.js%20CI/badge.svg?branch=master) [![codecov](https://codecov.io/gh/herbsjs/herbarium/branch/master/graph/badge.svg)](https://codecov.io/gh/herbsjs/herbarium)

# Herbarium 

Herbarium is a centralized and standardized repository and discovery service for Herbs objects (entities, use cases, repositories) allowing glues (ex: Herbs Shelf, herbs2rest, herbs2gql, herbs2knex, etc) to access, explore and find these objects.

### Installing

```$ npm install @herbsjs/herbarium```

### Initializing 

```javascript
const { herbarium } = require('@herbs/herbarium')
herbarium.requireAll(options)
```

This will require all entities, use cases and repositories files.

*Advanced Options*

`options`:
- `initialPath`: (optional) default `process.cwd()`
- `avoidFiles`: (optional) default `(fileName) => fileName.includes('test.js') ? false : fileName`
- `entitiesPath`: (optional) default `/src/domain/entities` 
- `usecasesPath`: (optional) default `/src/domain/usecases` 
- `repositoriesPath`: (optional) default `/src/infra/repositories` 

### Adding Objects and Metadata

*Entities*
```javascript
// src/domain/entities/item.js
const { entity, field } = require('@herbsjs/herbs')
const { herbarium } = require('@herbsjs/herbarium')

const Item =
    entity('Item', {
        ...
    })

module.exports =
    herbarium.entities
        .add(Item, 'Item')
        .entity
```

*Use Cases*
```javascript
// src/domain/usecases/item/createItem.js
const { usecase } = require('@herbsjs/herbs')
const { herbarium } = require('@herbsjs/herbarium')
const { Item } = require('../entities/item')

const createItem = (injection) =>
    usecase('Create Item', {
        ...
    })

module.exports =
    herbarium.usecases
        .add(createItem, 'CreateItem')
        .metadata({ group: 'Items', operation: herbarium.crud.create, entity: Item })
        .usecase
```

*Repository*
```javascript
const { herbarium } = require('@herbsjs/herbarium')
const { Repository } = require("@herbsjs/herbs2knex")
const { Item } = require('../../../domain/entities/item')

class ItemRepository extends Repository {
    constructor(injection) {
        ...
    }
}

module.exports =
    herbarium.repositories
        .add(ItemRepository, 'ItemRepository')
        .metadata({ entity: Item })
        .repository
```

### Consuming Objects


*all*
```javascript
const entities = herbarium.entities.all
const usecases = herbarium.usecases.all
const repositories = herbarium.repositories.all
```

*findBy*
```javascript
const usecases = herbarium.usecases
    .findBy({ operation: [herbarium.crud.create, herbarium.crud.update, herbarium.crud.delete] })
```

*get by id*
```javascript
const entity = herbarium.entities.get(1)
const usecase = herbarium.usecases.get("a")
const repository = herbarium.repositories.get(item)
```

## TODO

- [ ] Improve Test Coverage (metadata, specialized objects, etc)
- [ ] Default IDs - No need to inform IDs when adding a item. Use entity name or use case description.

### Contribute

Come with us to make an awesome *Herbarium*.

Now, if you do not have technical knowledge and also have intend to help us, do not feel shy, [click here](https://github.com/herbsjs/herbarium/issues) to open an issue and collaborate their ideas, the contribution may be a criticism or a compliment (why not?)

If you would like to help contribute to this repository, please see [CONTRIBUTING](https://github.com/herbsjs/herbarium/blob/master/.github/CONTRIBUTING.md)

### The Herb

A herbarium is a collection of preserved plant specimens and associated data used for scientific study.

https://en.wikipedia.org/wiki/Herbarium

### License

**Herbarium** is released under the
[MIT license](https://github.com/herbsjs/herbarium/blob/master/LICENSE.md).