module.exports = app => {
  const mongoose = require("mongoose")
  mongoose.connect('mongodb://localhost:32768/moba', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}