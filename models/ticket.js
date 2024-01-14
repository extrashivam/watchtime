// models/Ticket.js
const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  seatNumber: { type: Number, required: true },
  status: { type: String, enum: ['open', 'closed'], default: 'open' },
  userDetails: {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
  },
  dateOfBooking: { type: Date, default: Date.now },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
