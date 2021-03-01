const { Schema, model } = require('mongoose');

const KidsSchema = new Schema({
    name: { type: String },
    age: { type: Number },
    language: { type: String, default: 'uk' }
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

module.exports = model('Kid', KidsSchema);
