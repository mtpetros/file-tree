const router = require('express').Router()

const {
  factories,
  children
} = require('../queries')

router.post('/', (req, res, next) => {
  const { data } = req.body

  factories.save(data)
    .then(factories => {
      const factory = factories[0]
      const { id } = factory

      return children.save(id, data.children)
        .then(children => res.json({
          data: {
            factory: {
              ...factory,
              children
            }
          }
        }))
    })
    .catch(next)
})

router.get('/', (req, res, next) => {
  factories.getAll()
    .then(data => res.json({ data }))
    .catch(next)
})

module.exports = router
