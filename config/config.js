// config.js

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:admin123@cluster0.fcugwoe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

module.exports = {
  mongoURI: process.env.MONGO_URI || 'mongodb+srv://admin:admin123@cluster0.fcugwoe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
  email: {
    host: process.env.EMAIL_HOST || 'smtp.example.com',
    port: process.env.EMAIL_PORT || 587,
    user: process.env.EMAIL_USER || 'your_email@example.com',
    pass: process.env.EMAIL_PASS || 'your_email_password'
  },
  connectDB,
};
