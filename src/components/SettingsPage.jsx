import React, { useState } from "react";
import { Box, TextField, Button, FormControlLabel, Switch, Divider, Select, MenuItem, InputLabel, CircularProgress } from "@mui/material";

const SettingsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [language, setLanguage] = useState("en");
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [logo, setLogo] = useState(null);
  const [themeColor, setThemeColor] = useState("#1976d2");
  const [loading, setLoading] = useState(false);

  const handleDarkModeChange = () => setIsDarkMode(!isDarkMode);
  const handleEmailNotificationsChange = () => setEmailNotifications(!emailNotifications);
  const handleLanguageChange = (event) => setLanguage(event.target.value);
  const handle2FAChange = () => setIs2FAEnabled(!is2FAEnabled);

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file)); // Simulate logo upload
    }
  };

  const handleChangeThemeColor = (event) => setThemeColor(event.target.value);

  const handleBackupNow = () => {
    setLoading(true);
    // Simulating backup operation
    setTimeout(() => {
      setLoading(false);
      alert("Backup completed!");
    }, 2000);
  };

  const handleRestoreFromBackup = () => {
    setLoading(true);
    // Simulating restore operation
    setTimeout(() => {
      setLoading(false);
      alert("Restore completed!");
    }, 2000);
  };

  return (
    <Box p={3}>
      <h2>General Settings</h2>
      <Box mb={2}>
        <FormControlLabel
          control={
            <Switch
              checked={isDarkMode}
              onChange={handleDarkModeChange}
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "#1976d2", // Color when switched on (blue)
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#1976d2", // Color of track when switched on
                },
              }}
            />
          }
          label="Enable Dark Mode"
        />
      </Box>
      <Box mb={2}>
        <FormControlLabel
          control={
            <Switch
              checked={emailNotifications}
              onChange={handleEmailNotificationsChange}
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "#1976d2", // Color when switched on (blue)
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#1976d2", // Color of track when switched on
                },
              }}
            />
          }
          label="Email Notifications"
        />
      </Box>
      <Box mb={2}>
        <InputLabel>Language</InputLabel>
        <Select
          value={language}
          onChange={handleLanguageChange}
          fullWidth
          variant="outlined"
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="es">Hindi</MenuItem>
          <MenuItem value="fr">Marathi</MenuItem>
        </Select>
      </Box>

      <Divider sx={{ my: 3 }} />

      <h2>User Settings</h2>
      <Button variant="contained" color="primary">
        Manage Users
      </Button>

      <Divider sx={{ my: 3 }} />

      <h2>Security Settings</h2>
      <Box mb={2}>
        <FormControlLabel
          control={
            <Switch
              checked={is2FAEnabled}
              onChange={handle2FAChange}
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "#1976d2", // Color when switched on (blue)
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#1976d2", // Color of track when switched on
                },
              }}
            />
          }
          label="Enable 2-Factor Authentication"
        />
      </Box>

      <Divider sx={{ my: 3 }} />

      <h2>Theme Settings</h2>
      <Button variant="contained" color="primary" component="label">
        Upload Logo
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleLogoUpload}
        />
      </Button>
      {logo && (
        <Box mt={2}>
          <img src={logo} alt="Uploaded Logo" style={{ width: 100, height: 100 }} />
        </Box>
      )}
      <Box mt={2}>
        <TextField
          label="Theme Color"
          type="color"
          value={themeColor}
          onChange={handleChangeThemeColor}
          fullWidth
        />
      </Box>

      <Divider sx={{ my: 3 }} />

      <h2>Backup & Restore</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={handleBackupNow}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Backup Now"}
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        sx={{ ml: 2 }}
        onClick={handleRestoreFromBackup}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Restore from Backup"}
      </Button>
    </Box>
  );
};

export default SettingsPage;
