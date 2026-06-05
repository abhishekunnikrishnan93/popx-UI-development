import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Register() {
  const navigate = useNavigate();

  const [agency, setAgency] = useState("yes");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { fullName, phone, email, password } = formData;

    // Required fields validation
    if (!fullName || !phone || !email || !password) {
      alert("Please fill all required fields.");
      return;
    }

    // Phone validation
    if (!/^\d{10}$/.test(phone)) {
      alert("Phone number must contain exactly 10 digits.");
      return;
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Password validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    // Save user data
    const userData = {
      fullName,
      phone,
      email,
      password,
      company: formData.company,
      agency,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    navigate("/settings");
  };

  return (
    <div className="mobile-screen">
      <div className="register-content">
        <h1>
          Create your
          <br />
          PopX account
        </h1>

        <div className="input-group">
          <label>Full Name*</label>
          <input
            type="text"
            name="fullName"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Phone number*</label>
          <input
            type="text"
            name="phone"
            placeholder="9876543210"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Email address*</label>
          <input
            type="email"
            name="email"
            placeholder="marry@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Password*</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Company name</label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="agency-section">
          <p>
            Are you an Agency?<span>*</span>
          </p>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="agency"
                checked={agency === "yes"}
                onChange={() => setAgency("yes")}
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="agency"
                checked={agency === "no"}
                onChange={() => setAgency("no")}
              />
              No
            </label>
          </div>
        </div>

        <button
          className="register-btn"
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Register;