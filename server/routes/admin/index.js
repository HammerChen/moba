module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const Cateory = require('../../models/Category')

  router.post('/categories', async (req, res) => {
    const model = await Cateory.create(req.body)
    res.send(model)
  })
  router.put('/categories/:id', async (req, res) => {
    const model = await Cateory.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  router.delete('/categories/:id', async (req, res) => {
    await Cateory.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  router.get('/categories', async (req, res) => {
    const items = await Cateory.find().limit(10)
    res.send(items)
  })
  router.get('/categories/:id', async (req, res) => {
    const model = await Cateory.findById(req.params.id)
    res.send(model)
  })
  app.use('/admin/api', router)
}