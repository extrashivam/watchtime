// controllers/ticketController.js
const ticketModel = require('../models/ticket');

const ticketController = {

    createTicket: async (req, res) => {
        try {
            const { firstName, lastName, email } = req.body;
      
            // Find the last seat number in use
            // const lastSeat = await ticketModel.findOne().sort({ seatNumber: -1 });
      
            // Calculate the next seat number
            const nextSeatNumber =  1;
      
            // Check if the next seat number is within the allowed range (1 to 40)
            if (nextSeatNumber <= 40) {
              // Create a new ticket
              const newTicket = new ticketModel({
                seatNumber: nextSeatNumber,
                status: 'open',
                userDetails: {
                  firstName,
                  lastName,
                  email,
                },
              });
      
              // Save the ticket to the database
              await newTicket.save();
      
              return res.status(201).json({ message: 'Ticket created successfully.', ticket: newTicket });
            } else {
              return res.status(400).json({ message: 'All seats are booked. Cannot create a new ticket.' });
            }
          } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error.' });
          }
        },

    getAllTickets: async (req, res) => {
        return res.json({ 'data': "all ticket" })
        // Implement logic to fetch all tickets
    },

    getClosedTickets: async (req, res) => {
        try {
            // Find all tickets with a "closed" status
            const closedTickets = await ticketModel.find({ status: 'closed' });

            return res.status(200).json({ closedTickets });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error.' });
        }
    },

    getOpenTickets: async (req, res) => {
        try {
            // Find all tickets with a "closed" status
            const openTickets = await ticketModel.find({ status: 'open' });

            return res.status(200).json({ openTickets });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error.' });
        }
    },

    updateTicketStatus: async (req, res) => {
        try {
            const { ticketId } = req.params;
            const { status, firstName, lastName, email } = req.body;

            // Check if the ticket exists
            const ticket = await ticketModel.findById(ticketId);

            if (!ticket) {
                return res.status(404).json({ message: 'Ticket not found.' });
            }

            // Update ticket status and user details
            ticket.status = status || ticket.status;
            ticket.userDetails = {
                firstName: firstName || ticket.userDetails.firstName,
                lastName: lastName || ticket.userDetails.lastName,
                email: email || ticket.userDetails.email,
            };

            // Save the updated ticket to the database
            await ticket.save();

            return res.status(200).json({ message: 'Ticket updated successfully.', ticket });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error.' });
        }
    },


    resetServer: async (req, res) => {
        try {
            // Check if the user is an admin (you might have your own admin authentication logic)
            const isAdmin = req.headers.authorization === 'admin_token';

            if (!isAdmin) {
                return res.status(403).json({ message: 'Access forbidden. Only admin can reset the server.' });
            }

            // Reset all tickets to "open" status and clear user details
            await Ticket.updateMany({}, { $set: { status: 'open', userDetails: {} } });

            return res.status(200).json({ message: 'Server reset successful.' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error.' });
        }
    },

    viewTicketOwnerDetails: async (req, res) => {
        try {
            const { ticketId } = req.params;

            // Check if the ticket exists
            const ticket = await ticketModel.findById(ticketId);

            if (!ticket) {
                return res.status(404).json({ message: 'Ticket not found.' });
            }

            // Return the details of the person owning the ticket
            const ownerDetails = ticket.userDetails;

            return res.status(200).json({ ownerDetails });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error.' });
        }
    },

    viewTicketStatus: async (req, res) => {
        try {
            const { ticketId } = req.params;

            // Check if the ticket exists
            const ticket = await ticketModel.findById(ticketId);

            if (!ticket) {
                return res.status(404).json({ message: 'Ticket not found.' });
            }

            // Return the ticket status
            return res.status(200).json({ status: ticket.status });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error.' });
        }
    },
};

module.exports = ticketController;
