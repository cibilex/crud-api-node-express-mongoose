const mongoose = require("mongoose"); 
const dbConnection = async () => {
  const url =process.env.MONGODB_URL || "mongodb://localhost/mevn-project";
  await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .then(()=>console.log(`successfully connected to ${url}`.blue.italic.bold))
    .catch(e=>console.log(e))
};

module.exports = dbConnection;
