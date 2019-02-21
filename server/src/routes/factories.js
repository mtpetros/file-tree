const router = require('express').Router()
const generateChildren = require('../lib/generateChildren')

const {
  factories,
  children
} = require('../queries')

router.post('/', (req, res, next) => {
  const { data } = req.body
  const newChildren = generateChildren(data)

  factories.save(data)
    .then(factories => {
      const factory = factories[0]
      const { id } = factory

      return children.save(id, newChildren)
    })
    .then(() => res.status(200).send())
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  const { id } = req.params
  const { data } = req.body
  const newChildren = generateChildren(data)

  factories.update(id, data)
    .then(() => children.remove(id))
    .then(() => children.save(id, newChildren))
    .then(() => res.status(200).send())
    .catch(next)
})

router.get('/', (req, res, next) => {
  factories.getAll()
    .then(data => res.json({ data }))
    .catch(next)
})

module.exports = router
