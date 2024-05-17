import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  username:{
    type:String,
    required:true,
    unique:true
  },
  password: {
    type:String,
    required:true,
  },
  authority: [
    {
      pool_name:String,
      pool_role:String
    }
  ]
});