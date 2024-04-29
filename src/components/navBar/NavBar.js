import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Avatar,
  Dialog,
  DialogContent,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import FeatureSection from "../../pages/landingPage/sample/dialog/feature";
import Team from "../../pages/landingPage/sample/dialog/team";
import { ContactUs } from "../../popup/contact/contact";
import AboutSection from "../../pages/landingPage/sample/dialog/AboutSection";

const NavBar = ({ icon, toggleSidebar }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  // const handleHome = () => {
  //   navigate("/");
  //   handleCloseMenu();
  // };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenDialog = (feature) => {
    setSelectedFeature(feature);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const renderUserMenu = () => {
    return (
      <div>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={() => handleOpenDialog("FeatureSection")} onClose>
            Feature
          </MenuItem>
          <MenuItem onClick={() => handleOpenDialog("AboutSection")}>
            About
          </MenuItem>
          <MenuItem onClick={() => handleOpenDialog("Team")}>Team</MenuItem>
          <MenuItem onClick={() => handleOpenDialog("ContactUs")}>
            Contact
          </MenuItem>
        </Menu>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          {/* <DialogTitle>{selectedFeature}</DialogTitle> */}
          <DialogContent>
            {selectedFeature === "FeatureSection" && <FeatureSection />}
            {selectedFeature === "Team" && <Team />}
            {selectedFeature === "ContactUs" && <ContactUs />}
            {selectedFeature === "AboutSection" && <AboutSection />}
            {/* Render other components based on selectedFeature */}
          </DialogContent>
        </Dialog>
      </div>
    );
  };

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#2c3e50", height: "70px" }}
    >
      <Toolbar>
        <div className="logo">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar}
          >
            {icon === "bars" ? (
              <MenuIcon style={{ fontSize: "1.5em" }} />
            ) : (
              <CloseIcon style={{ fontSize: "1.5em" }} />
            )}
          </IconButton>
        </div>
        <Typography variant="h6" style={{ flexGrow: 1, fontSize: "1.5em" }}>
          DSA Visualizer
        </Typography>
        <div className="button-list">
          <div
            className="user"
            onClick={handleMenuClick}
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <Avatar alt="User Avatar" src={"mage"} />
            <Typography
              variant="body1"
              style={{ marginLeft: "8px" }}
            ></Typography>
          </div>
          {renderUserMenu()}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
