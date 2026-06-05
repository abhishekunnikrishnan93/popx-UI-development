import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Register() {
  const navigate = useNavigate();
  const [agency, setAgency] = useState("yes");

  const handleSubmit = () => {
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
            placeholder="Marry Doe"
          />
        </div>

        <div className="input-group">
          <label>Phone number*</label>
          <input
            type="text"
            placeholder="Marry Doe"
          />
        </div>

        <div className="input-group">
          <label>Email address*</label>
          <input
            type="email"
            placeholder="Marry Doe"
          />
        </div>

        <div className="input-group">
          <label>Password*</label>
          <input
            type="password"
            placeholder="Marry Doe"
          />
        </div>

        <div className="input-group">
          <label>Company name</label>
          <input
            type="text"
            placeholder="Marry Doe"
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