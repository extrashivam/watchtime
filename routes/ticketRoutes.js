const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
const authenticateAdmin = require('../middleware/authmiddleware');


router.get('/', authenticateAdmin, ticketController.getAllTickets);
router.post('/create', authenticateAdmin, ticketController.createTicket);
router.get('/:ticketId/status', authenticateAdmin, ticketController.viewTicketStatus);
router.get('/closed', authenticateAdmin, ticketController.getClosedTickets);
router.get('/open', authenticateAdmin, ticketController.getOpenTickets);

router.get('/:ticketId/details', authenticateAdmin, ticketController.viewTicketOwnerDetails);
router.post('/:ticketId', authenticateAdmin, ticketController.updateTicketStatus);

module.exports = router;
