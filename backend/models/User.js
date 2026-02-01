import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  college: { type: String, default: '' },
  passwordHash: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('User', UserSchema);