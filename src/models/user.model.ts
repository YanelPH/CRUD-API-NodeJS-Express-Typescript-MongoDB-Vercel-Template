import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  lastname: string;
  firstname: string;
}

const userSchema = new mongoose.Schema({
  lastname: String,
  firstname: String,
});

export default mongoose.model<IUser>("User", userSchema);
