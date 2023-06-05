const express = require('express');
const router = express.Router();
const BWelcomeTemplateCopy = require('../models/ArtModel')


router.post('/AN', async(req, res) => {
  const { answer, genre, dropdown, isChecked, feedbacks, ratings } = req.body;
  const options = Object.entries(genre).map(([name, value]) => ({ name, value }));
  const signUpUser = new BWelcomeTemplateCopy({
    answer,
    options,
    dropdown,
    isChecked,
    feedbacks,
    ratings
  });
  // DELETE route for deleting feedback by ID
router.delete('/feedback/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
  await Feedback.findByIdAndDelete(id);
  res.status(200).json({ message: 'Feedback deleted successfully' });
  } catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Failed to delete feedback' });
  }
  });
try{
  await signUpUser.save()
  res.status(201).json({ message: 'Feedback saved successfully' });
} catch (error) {
console.error(error);
res.status(500).json({ message: 'Failed to save feedback' });
}
});
router.get('/AN', async (req, res) => {
  try {
  const feedback = await BWelcomeTemplateCopy.find();
  res.json(feedback);
  } catch (error) {
  res.status(501).json({ error: error.message });
  }
  });

module.exports = router;

