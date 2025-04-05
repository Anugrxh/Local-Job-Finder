// routes/jobRoutes.js
const express = require('express');
const router = express.Router();
const {
  createJob,
  getAllJobs,
  getJobsByEmployer,
  updateJob,
  deleteJob,
  getJob,
  markInterest,
  getInterestedEmployees
} = require('../controllers/jobController');

router.post('/', createJob); // POST /api/jobs
router.get('/', getAllJobs); // GET /api/jobs
router.get('/employer/:employerId', getJobsByEmployer); // GET /api/jobs/employer/:employerId
router.put('/:id', updateJob); // PUT /api/jobs/:id
router.get('/:id', getJob); // PUT /api/jobs/:id
router.delete('/:id', deleteJob); // DELETE /api/jobs/:id
router.post("/interest", markInterest);
router.get("/:jobId/interested-employees", getInterestedEmployees);

module.exports = router;
