const mongoose = require('mongoose');

const WelcomeTemplateB = new mongoose.Schema({
  answer: {
    type: String,
    
  },

  options: [{
    name: String,
    value: Boolean,
    
  }],

  dropdown: {
    type: String,
    
  },
  ratings:{
    type: String,
  },

  isChecked: {
    type: String,
    
  },
  
  feedbacks: {
    type: String,
  },

   date: {
    type: Date,
    default: Date.now
  }
  
});

module.exports = mongoose.model('surveydb', WelcomeTemplateB);




    
    