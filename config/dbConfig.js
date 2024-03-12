
const mongoose = require ('mongoose');

mongoose.connect(process.env.mongo_url)
.then(()=>{
    console.log('Server is connected to MongoDB Successfully..!')
})
.catch((err)=>{
    console.log(err)
})
module.exports = mongoose;