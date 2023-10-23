import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  champ1: string;
  champ2: number;
}

const userSchema = new mongoose.Schema({
  champ1: String,
  champ2: Number,
});

export default mongoose.model<IUser>("User", userSchema);
