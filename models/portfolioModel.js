
const mongoose = require('mongoose');

const introSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    caption : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
});

const aboutSchema = mongoose.Schema({
    imageUrl : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
})

const skillSchema = mongoose.Schema({
  skills : {  
    type : Array,
    required : true
  }
})

const projectShema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    link : {
        type : String,
        required : true
    },
});

const contactSchema = mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true
    },
    Age : {
        type : Number,
        required : true
    },
    Gender : {
        type : String,
        required : true
    },
    Address : {
        type : String,
        required : true
    },
    Mobile : {
        type : Number,
        required : true
    },
})

module.exports = {
    Intro : mongoose.model('intros',introSchema),
    About : mongoose.model('abouts',aboutSchema),
    Skill : mongoose.model('skills',skillSchema),
    Project : mongoose.model('projects',projectShema),
    Contact : mongoose.model('contacts',contactSchema),
}