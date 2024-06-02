import * as mongoose from 'mongoose';

export const eftSchema = new mongoose.Schema({
    sender:String,
    receiver:String,
    create_date:Date,
    amount:Number
})