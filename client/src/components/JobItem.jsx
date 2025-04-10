import React, { useState } from "react";
import axios from "axios";

const JobItem = ({ job, fetchJobs }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedJob, setEditedJob] = useState({ ...job });

  const handleDelete = async () => {
    await axios.delete(`http://localhost:4000/api/jobs/${job._id}`);
    fetchJobs();
  };

  const handleStatusChange = async (e) => {
    await axios.put(`http://localhost:4000/api/jobs/${job._id}`, {
      ...job,
      status: e.target.value
    });
    fetchJobs();
  };

  const handleEditChange = (e) => {
    setEditedJob({ ...editedJob, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await axios.put(`http://localhost:4000/api/jobs/${job._id}`, editedJob);
    setIsEditing(false);
    fetchJobs();
  };

  return (
    <div className={`job-card status-${job.status}`}>
      {isEditing ? (
        <>
          <input name="company" value={editedJob.company} onChange={handleEditChange} />
          <input name="role" value={editedJob.role} onChange={handleEditChange} />
          <select name="status" value={editedJob.status} onChange={handleEditChange}>
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
          <input type="date" name="appliedDate" value={editedJob.appliedDate.slice(0, 10)} onChange={handleEditChange} />
          <input name="link" value={editedJob.link} onChange={handleEditChange} />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{job.company} - {job.role}</h4>
          <p>Status: 
            <select value={job.status} onChange={handleStatusChange}>
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
          </p>
          <p>Date: {new Date(job.appliedDate).toLocaleDateString()}</p>
          <a href={job.link} target="_blank" rel="noreferrer">Job Link</a>
          <div style={{ marginTop: "10px" }}>
            <button onClick={() => setIsEditing(true)}>Update</button>   &nbsp;
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default JobItem;
