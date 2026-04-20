import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode} aria-label="Toggle Dark Mode">
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        {/* Notification Icon: Navigate to Notifications Page */}
        <Link to="/notifications">
          <IconButton aria-label="Notifications">
            <NotificationsOutlinedIcon />
          </IconButton>
        </Link>

        {/* Settings Icon: Navigate to Settings Page */}
        <Link to="/settings">
          <IconButton aria-label="Settings">
            <SettingsOutlinedIcon />
          </IconButton>
        </Link>

        {/* Profile Icon: Navigate to Profile Page */}
        <Link to="/profile">
          <IconButton aria-label="Profile">
            <PersonOutlinedIcon />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default Topbar;
