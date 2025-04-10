import React, { useEffect, useState } from "react";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";
import FilterBar from "../components/FilterBar";
import axios from "axios";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchJobs = async () => {
    const res = await axios.get("http://localhost:4000/api/jobs");
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const filteredJobs = filter ? jobs.filter(job => job.status === filter) : jobs;

  return (
    <div>
      <h2>Student Job Tracker</h2>
      <JobForm fetchJobs={fetchJobs} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <JobList jobs={filteredJobs} fetchJobs={fetchJobs} />
    </div>
  );
};

export default Home;