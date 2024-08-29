const Invitation = require('../models/order'); // Ensure this path is correct

// Get all invitations for the logged-in user
exports.getUserInvitations = async (req, res) => {
  try {
    const invitations = await Invitation.find({ user: req.user.id });
    res.json(invitations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Create a new invitation
exports.createInvitation = async (req, res) => {
  const { details } = req.body;

  if (!details) {
    return res.status(400).json({ msg: 'Details are required' });
  }

  try {
    const newInvitation = new Invitation({
      details,
      user: req.user.id,
    });

    const invitation = await newInvitation.save();
    res.status(201).json(invitation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
