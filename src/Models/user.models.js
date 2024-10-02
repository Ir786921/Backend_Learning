import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    FullName: {
      type: String,
      required: true,
      unique: true,
    },
    Contact: {
      type: Number,
      required: true,
      unique: true,
    },
    PassWord:{
        type :String,
        required : [true , "Password Is required"],
        unique : true
    }
  },
  { timestamps: true }

);

UserSchema.pre("save" , async function(next) {
    if (!this.isModified("PassWord")) return next();
    
    this.PassWord = bcrypt.hash(this.PassWord,10)
    next()
})

export const  User = mongoose.model("User", UserSchema);
