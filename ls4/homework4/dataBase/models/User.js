const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 15 },
    language: { type: String, default: 'uk' },
    _kids: [{ type: Schema.Types.ObjectId }]
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

// eslint-disable-next-line func-names
userSchema.virtual('full_name').get(function() {
    return `${this.name} ${this.age}`;
});

userSchema.virtual('kids', {
    ref: 'Kid',
    localField: '_kids',
    foreignField: '_id'
});

// eslint-disable-next-line func-names
userSchema.pre('find', function() {
    this.populate('kids');
})
    // eslint-disable-next-line func-names
    .pre('findOne', function() {
        this.populate('kids');
    });
module.exports = model('User', userSchema);
