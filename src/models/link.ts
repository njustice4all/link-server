import mongoose, { Schema, Document } from 'mongoose';

export interface ILink extends Document {
  title: string;
  link: string;
}

const LinkSchema: Schema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
});

export default mongoose.model<ILink>('Link', LinkSchema);
