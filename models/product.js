
const { Schema, model } = require('mongoose');


const ProductSchema = Schema({

    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    state: {
        type: Boolean,
        default:true,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    prize: {
        type: Number,
        default: 0
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    description: { type: String },
    disponibility: { type: Boolean, default: true}
});


ProductSchema.methods.toJSON = function() {
    const { __v, state, ...product } = this.toObject();
    return product;
}


module.exports = model( 'Product', ProductSchema );