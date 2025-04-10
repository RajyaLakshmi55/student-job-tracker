import React, { useState } from "react";
import axios from "axios";

const JobForm = ({ fetchJobs }) => {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    appliedDate: "",
    link: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/jobs", formData); // or 4000 if that’s your server port
      fetchJobs();
      setFormData({
        company: "",
        role: "",
        status: "Applied",
        appliedDate: "",
        link: ""
      });
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" required />
      <input name="role" value={formData.role} onChange={handleChange} placeholder="Role" required />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input type="date" name="appliedDate" value={formData.appliedDate} onChange={handleChange} required />
      <input name="link" value={formData.link} onChange={handleChange} placeholder="Link" />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;
