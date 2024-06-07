import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch single user data based on ID
  const getSingleUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/user/${id}`);
      console.log(response);
      const userData = response.data; // Assuming response data contains user details
      setFormData(userData); // Set form data with fetched user details
    } catch (err) {
      console.log("Error fetching user:", err);
    }
  };

  useEffect(() => {
    getSingleUser();
  }, []); // Fetch user data once on component mount

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send updated user data to the server for update
      await axios.put(`http://localhost:3000/api/user/${id}`, formData);
      // Redirect to user details page or other appropriate page after successful update
      // history.push(`/users/${id}`);
      alert("update data successfully");
      navigate("/Read");
    } catch (err) {
      console.log("Error updating user:", err);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter Age"
            required
            className="form-control"
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
