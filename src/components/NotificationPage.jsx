import React, { useState } from "react";
import { Box, Button, Checkbox, FormControlLabel, List, ListItem, ListItemText, IconButton, CircularProgress, Divider } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { fontSize, styled } from "@mui/system";

const NotificationPage = () => {
  // Sample notification data
  const initialNotifications = [
    { id: 1, message: "System update scheduled for tonight.", read: false },
    { id: 2, message: "New user registration on the platform.", read: false },
    { id: 3, message: "Password change request received.", read: true },
    { id: 4, message: "Database backup completed successfully.", read: false },
  ];

  const [notifications, setNotifications] = useState(initialNotifications);
  const [loading, setLoading] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [systemAlerts, setSystemAlerts] = useState(true);

  // Toggle read/unread status
  const toggleReadStatus = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id
        ? { ...notification, read: !notification.read }
        : notification
    ));
  };

  // Delete a notification
  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  // Simulate adding a new notification
  const addNewNotification = () => {
    setLoading(true);
    setTimeout(() => {
      setNotifications([
        ...notifications,
        { id: Date.now(), message: "New system alert received.", read: false }
      ]);
      setLoading(false);
    }, 2000);
  };

  // Toggle email notifications
  const handleEmailNotificationsChange = () => setEmailNotifications(!emailNotifications);

  // Toggle system alerts
  const handleSystemAlertsChange = () => setSystemAlerts(!systemAlerts);

  return (
    <Box p={3}>
      <h2>Notifications</h2>
      
      {/* Notification Settings */}
      <Divider sx={{ my: 3 }} />
      <h3>Notification Settings</h3>
      <FormControlLabel
        control={<Checkbox checked={emailNotifications} onChange={handleEmailNotificationsChange} />}
        label="Enable Email Notifications"
      />
      <FormControlLabel
        control={<Checkbox checked={systemAlerts} onChange={handleSystemAlertsChange} />}
        label="Enable System Alerts"
      />
      
      <Divider sx={{ my: 3 }} />

      {/* New Notification Button */}
      <Button variant="contained" color="primary" onClick={addNewNotification} disabled={loading}>
        {loading ? <CircularProgress size={24} color="inherit" /> : "Add New Notification"}
      </Button>
      
      <Divider sx={{ my: 3 }} />

      {/* Notification List */}
      <h3>Notification List</h3>
      <List>
        {notifications.length === 0 ? (
          <ListItem>
            <ListItemText primary="No notifications available." />
          </ListItem>
        ) : (
          notifications.map((notification) => (
            <ListItem key={notification.id} divider>
              <ListItemText
                primary={notification.message}
                sx={{
                  textDecoration: notification.read ? "line-through" : "none",
                  color: notification.read ? "red" : "grey",
                }}
              />
              <IconButton sx={{fontSize:".7rem",border:"2px solid grey",borderRadius:"10px"}} onClick={() => toggleReadStatus(notification.id)} >
                {notification.read ? "Mark as Unread" : "Mark as Read"}
              </IconButton>
              <IconButton onClick={() => deleteNotification(notification.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))
        )}
      </List>
    </Box>
  );
};

export default NotificationPage;
