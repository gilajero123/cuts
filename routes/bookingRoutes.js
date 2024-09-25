const express = require('express');


const router = express.Router();

// Create a new booking
router.post('/', async (req, res) => {
    const { name, email, phone, service, barber, date } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !service || !barber || !date) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newBooking = new Booking({ name, email, phone, service, barber, date });

    try {
        const savedBooking = await newBooking.save();
        res.status(201).json(savedBooking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a booking by ID
router.get('/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) return res.status(404).json({ message: 'Booking not found' });
        res.json(booking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Export the router
module.exports = router;
