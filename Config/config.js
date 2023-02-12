const mongo = require('mongoose');

const connectdb=async()=>{
    try{
        mongo.set('strictQuery', false)
        await mongo.connect('mongodb+srv://root:root@cluster0.xyqucy8.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser : true
        },()=>{
            console.log("DataBase connected");
        })
    }catch(err){
        console.log(err);
    }
}
connectdb();
module.exports = connectdb;
