const Announcement = require('../models/Announcement');

const storeData = async (req, res) => {
  const { email, subject, body, slack, telegram, discord } = req.body;

  const newAnnouncement = new Announcement({
    email,
    subject,
    body,
    slack,
    telegram,
    discord,
  });

  try {
    await newAnnouncement.save();
    res.send({
      success: true,
    });
  } catch (err) {
    res.send({
      success: false,
      error: err,
    });
  }
};

module.exports = {
  storeData,
};