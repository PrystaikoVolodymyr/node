const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    sex: { type: String, required: true },
    yearOfBorn: { type: Number, required: true },
    married: { type: String },
    pair: { type: Object }
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

module.exports = model('User', userSchema);
