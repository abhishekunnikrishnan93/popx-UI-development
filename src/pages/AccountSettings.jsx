import "../App.css";

function AccountSettings() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="mobile-screen">
      <div className="settings-header">
        <h2>Account Settings</h2>
      </div>

      <div className="profile-card">
        <div className="profile-info">
          <div className="profile-image-wrapper">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
              className="profile-image"
            />
            <div className="camera-icon">📷</div>
          </div>

          <div>
            <h3>{user?.fullName || "User Name"}</h3>
            <p>{user?.email || "user@email.com"}</p>

            {user?.company && (
              <p
                style={{
                  fontSize: "12px",
                  color: "#666",
                  marginTop: "4px",
                }}
              >
                {user.company}
              </p>
            )}
          </div>
        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam.
        </p>
      </div>

      <div className="dashed-line"></div>
    </div>
  );
}

export default AccountSettings;