var mongoose = require("mongoose");


var Schema = mongoose.Schema;

var News = new Schema({
    headline: {
        type: String,
        trim: true,
        required: "String is Required"
    },
    summary: {
        type: String,
        trim: true,
        required: "String is Required"
    },
    url: {
        type: String,
        trim: true,
        required: "String is Required"
    },
    comments: {
        type: Array
    },
    saved: {
        type: Boolean,
        default: false
    }
});


var collection = "stories";
var Model = mongoose.model("Model", News, collection);


module.exports = Model;