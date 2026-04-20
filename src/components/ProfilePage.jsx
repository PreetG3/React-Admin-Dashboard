import React, { useState } from "react";
import { Box, TextField, Button, FormControlLabel, Switch, Divider, CircularProgress, IconButton } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const ProfilePage = () => {
  // Get saved profile data from localStorage, or use defaults
  const savedName = localStorage.getItem("profileName") || "John Doe";
  const savedAvatar = localStorage.getItem("profileAvatar");

  // Profile information states
  const [name, setName] = useState(savedName);
  const [email, setEmail] = useState("johndoe@example.com");
  const [avatar, setAvatar] = useState(savedAvatar);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [loading, setLoading] = useState(false);

  // Handle form inputs and avatar upload
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleEmailNotificationsChange = () => setEmailNotifications(!emailNotifications);

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newAvatar = URL.createObjectURL(file);
      setAvatar(newAvatar);
      localStorage.setItem("profileAvatar", newAvatar); // Save avatar to localStorage
    }
  };

  const handleSaveChanges = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("profileName", name); // Save name to localStorage
      setLoading(false);
      alert("Profile updated successfully!");
    }, 2000);
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        alert("Password changed successfully!");
      }, 2000);
    }
  };

  return (
    <Box p={3}>
      <h2>Profile Settings</h2>

      {/* Profile Information Section */}
      <Box mb={3} display="flex" alignItems="center">
        <Box>
          {/* Avatar upload */}
          <IconButton component="label">
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleAvatarUpload}
            />
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                background: avatar ? `url(${avatar}) no-repeat center/cover` : "#c4c4c4",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: 30,
                backgroundColor: "#1976d2",
              }}
            >
              {!avatar && <CameraAltIcon />}
            </Box>
          </IconButton>
        </Box>
        <Box ml={2}>
          <TextField
            label="Name"
            value={name}
            onChange={handleNameChange}
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            variant="outlined"
            disabled
          />
        </Box>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Password Change Section */}
      <h3>Change Password</h3>
      <TextField
        label="New Password"
        value={newPassword}
        onChange={handleNewPasswordChange}
        type="password"
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <TextField
        label="Confirm Password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        type="password"
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleChangePassword}
        disabled={loading}
        sx={{ mb: 3 }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Change Password"}
      </Button>

      <Divider sx={{ my: 3 }} />

      {/* Notification Settings */}
      <h3>Email Notifications</h3>
      <FormControlLabel
        control={<Switch checked={emailNotifications} onChange={handleEmailNotificationsChange} />}
        label="Enable Email Notifications"
      />

      <Divider sx={{ my: 3 }} />

      {/* Save Changes Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSaveChanges}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Save Changes"}
      </Button>
    </Box>
  );
};

export default ProfilePage;
