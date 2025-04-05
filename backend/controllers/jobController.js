// controllers/jobController.js
const Job = require('../models/Job');


const createJob = async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(201).json({ message: 'Job posted successfully', job: newJob });
  } catch (err) {
    res.status(500).json({ message: 'Error posting job', error: err.message });
    console.log(err.message)
  }
};

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching jobs', error: err.message });
  }
};

const getJobsByEmployer = async (req, res) => {
  try {
    const { employerId } = req.params;
    const jobs = await Job.find({ employer: employerId });
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching jobs', error: err.message });
  }
};

const getJob = async(req, res) => {
    try{
        const { id } = req.params;
        const job = await Job.findOne({ _id: id });
        res.status(200).json(job);
    }catch(err){
        res.status(500).json({message: "Error fetching job"})
    }
}

const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: 'Job updated successfully', job: updatedJob });
  } catch (err) {
    res.status(500).json({ message: 'Error updating job', error: err.message });
  }
};

const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    await Job.findByIdAndDelete(id);
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting job', error: err.message });
  }
};

const markInterest = async(req, res) => {
    const { jobId, employeeId } = req.body;

  try {
    const job = await Job.findById(jobId);

    if (!job) return res.status(404).json({ message: "Job not found" });

    if (!job.interested.includes(employeeId)) {
      job.interested.push(employeeId);
      await job.save();
    }

    res.status(200).json({ message: "Interest marked successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error marking interest", error });
  }
}

const getInterestedEmployees = async(req, res) => {
    try {
        const job = await Job.findById(req.params.jobId).populate("interested"); // assuming `interested` is an array of ObjectId
    
        if (!job) {
          return res.status(404).json({ message: "Job not found" });
        }
    
        res.json(job.interested); // returns array of employee objects
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

module.exports = {
  createJob,
  getAllJobs,
  getJobsByEmployer,
  updateJob,
  deleteJob,
  getJob,
  markInterest,
  getInterestedEmployees
};
