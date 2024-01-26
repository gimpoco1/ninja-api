import * as moongoose from 'mongoose';


export const ItemSchema = new moongoose.Schema({
    name: String,
    qty: Number,
    description: String
});