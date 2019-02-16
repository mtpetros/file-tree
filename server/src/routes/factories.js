const router = require('express').Router()

const {
  factories,
  children
} = require('../queries')

router.post('/', (req, res, next) => {
  const { data } = req.body

  factories.save(data)
    .then(factory => {
      const { id } = factory[0]

      return children.save(id, data.children)
    }).catch(next)
})

module.exports = router
