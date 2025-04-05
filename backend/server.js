const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');
const employerRoutes = require('./routes/employerRoutes');


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/employees', employeeRoutes);
app.use('/api/employer', employerRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/jobfinder', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log(err));
