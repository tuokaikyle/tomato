import mongoose from 'mongoose';

const tomatoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    group: {
      type: String,
      required: true,
    },
    due: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Tomato = mongoose.model('Tomato', tomatoSchema, 'Tomato');

export default Tomato;
