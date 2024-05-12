import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  authority: [
    {
      pool_name:String,
      pool_role:String
    }
  ]
});