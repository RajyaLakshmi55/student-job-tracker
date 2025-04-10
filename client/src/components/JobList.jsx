import React from "react";
import JobItem from "./JobItem";

const JobList = ({ jobs, fetchJobs }) => (
  <div className="job-list">
    {jobs.map((job) => (
      <JobItem key={job._id} job={job} fetchJobs={fetchJobs} />
    ))}
  </div>
);

export default JobList;
